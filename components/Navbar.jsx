import { DM_Sans, Syne } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const syne = DM_Sans({ subsets: ["latin"] });

const Navbar = () => {
  const router = useRouter();
  const control = useAnimation();
  const linkcontrol = useAnimation();
  const [show, setShow] = useState(false);

  const linkvariant = {
    hidden: {
      position: "relative",
      top: "-30px",
      opacity: 0,
      pointerEvents: "none",
    },
    visible: {
      position: "relative",
      top: "0",
      opacity: 1,
      pointerEvents: "all"
    }
  }
  return (
    <div className={"w-screen flex justify-center " + syne.className}>
      <motion.div
        transition={{
          ease: "easeInOut",
        }}
        variants={{
          hidden: {
            height: "85px",
            backdropFilter: "blur(0px)",
          },
          visible: {
            height: "100vh",
            flexDirection: "column",
            backdropFilter: "blur(40px)",
          },
        }}
        initial="hidden"
        animate={control}
        className="w-screen lg:px-28 px-5 lg:py-6 py-6 flex flex-col mix-blend-difference fixed z-[5000] "
      >
        <div className="w-full flex justify-between items-center">
          <Link href={"/"}>
            <img
              className="lg:w-60 w-24 md:w-44"
              src="/assets/HucksterLogo.png"
              alt=""
            />
          </Link>
          <div className="flex gap-10">
            <Link href={"/contactus"} className="lg:block hidden text-xl">wE'Re jUsT A CaLl aWaY</Link>{" "}
            <div onClick={() => {
              if (show) {
                control.start("hidden");
                linkcontrol.start("hidden");
                setShow(false);
              } else {
                control.start("visible");
                linkcontrol.start("visible");
                setShow(true);
              }
            }} className="text-white flex gap-10 items-center" >
              {" "}

              {!show ? (
                <HiOutlineMenuAlt3 className="text-2xl hover:cursor-pointer" />
              ) : (
                <RxCross2 className="text-2xl hover:cursor-pointer" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full lg:justify-end justify-center">
          <div className={show ? "mt-16 items-start flex flex-col gap-4 z-[100]" : "pointer-events-none mt-16 items-start flex flex-col gap-4 z-[100]"}>
            <motion.span
              variants={linkvariant}
              initial="hidden"
              animate={linkcontrol}
            >
              <Link
                className={
                  router.pathname === "/aboutus"
                    ? "text-accentorange lg:text-9xl text-5xl font-bold duration-200 px-3 py-2 rounded-full"
                    : "text-white/70 lg:text-9xl text-5xl font-bold hover:text-accentorange duration-200 px-3 py-2 rounded-full"
                }
                href={"/aboutus"}
              >
                WE
              </Link>
            </motion.span>
            <motion.span
              variants={linkvariant}
              initial="hidden"
              animate={linkcontrol}
            >
              <Link
                className={
                  router.pathname === "/work"
                    ? "text-accentolive lg:text-9xl text-5xl font-bold duration-200 px-3 py-2 rounded-full"
                    : "text-white/70 lg:text-9xl text-5xl font-bold hover:text-accentolive duration-200 px-3 py-2 rounded-full"
                }
                href={"/work"}
              >
                CREATE
              </Link>
            </motion.span>
            <motion.span
              variants={linkvariant}
              initial="hidden"
              animate={linkcontrol}
            >
              <Link
                className={
                  router.pathname === "/contactus"
                    ? "text-accentblue lg:text-9xl text-5xl font-bold duration-200 px-3 py-2 rounded-full"
                    : "text-white/70 lg:text-9xl text-5xl font-bold hover:text-accentblue duration-200 px-3 py-2 rounded-full"
                }
                href={"/contactus"}
              >
                FOR  YOU
              </Link>
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
