import Layout from "@/components/Layout";
import { DM_Sans, Inter, Syne } from "next/font/google";
import VideoPlayer from "@/components/Video";
import videojs from "video.js";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import CreationCard from "@/components/CreationCard";
const inter = DM_Sans({ subsets: ["latin"] });
const syne = DM_Sans({ subsets: ["latin"] });

const breakpoints = {
  1024: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  648: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
};

const Creation = () => {
  const videoUrl = "../../";
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/path/to/video.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <Layout>
      <HeroSection
        heading={
          <p>
            Ad for <br />
            WAHL MEA
          </p>
        }
        para={
          "While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content. "
        }
        img={
          "https://assets-global.website-files.com/633c3f6cb573b7ca538e9ffa/639b78f4806369ac8c0d944d_WestJet_Christmas%20Miracle.00_01_41_07.Still014-p-1080.jpg"
        }
      />
      {/* <section className='w-screen h-screen flex flex-col justify-center lg:py-20 py-14 lg:px-28 px-5 relative'>
        <Image className={'object-cover h-screen w-screen absolute top-0 left-0 z-[0] opacity-100 duration-500'} width={100} height={100} src="https://d135u4jtzauizi.cloudfront.net/A24_PRISCILLA_A24_GIF03.gif" alt="" />
        <button className={'relative z-10 font-semibold text-sm outline-none px-6 py-3 rounded-full border border-white text-white bg-transparent w-max ' + syne.className}>BACK</button>
        <p className={'relative z-10 lg:text-9xl text-3xl font-semibold w-full gradientText ' + syne.className}>WAHL MEA</p>
        <p className={'relative z-10 lg:text-3xl text-xl font-semibold w-full ' + inter.className}>by #hucksterproductions</p>
      </section> */}

      <section className="w-screen h-screen my-10 mt-20 lg:px-28 px-5">
        {/* <Video options={videoJsOptions} onReady={handlePlayerReady} /> */}
        {/* <VideoPlayer src={"/assets/demo.mp4"} /> */}
        <VideoPlayer src={"https://framerusercontent.com/assets/t3oWwHTiHPdqvISgXglF9dJecA.mp4"} />
      </section>

      <Reveal>
        <section className="w-screen lg:py-20 py-10 lg:px-28 px-5 grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-8">
            <p className={"text-4xl leading-snug " + syne.className}>
              The content and the location injected a true spirit of team work and
              consistency within us. Shot during the mid-summer, under the
              45&#176;C! Shout out to everyone in this project GHG calculations
              in-line!
            </p>
            <div
              className={
                "text-xl py-4 font-medium flex flex-col gap-2 " + syne.className
              }
            >
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accentgray"></div>
                <p className="">Brand: @wahl_mea</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accenttan"></div>
                <p className="">Campaign: GROOMING ASPIRATIONS SINCE 1919</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accentorange"></div>
                <p className="">Video: @ARRIChannel </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accentblue"></div>
                <p className="">Year: 2022</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accentteal"></div>
                <p className="">Location: U.A.E.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <div className="w-full lg:py-20 py-10 lg:px-28 px-5 lg:grid hidden lg:gap-16 gap-5">
        <Reveal>
          <h1 className={"lg:text-8xl text-3xl font-semibold w-full gradientText " + syne.className}>Frames</h1>
        </Reveal>
        <Swiper
          className="m-auto w-full"
          grabCursor={true}
          loop={true}
          breakpoints={breakpoints}
          // spaceBetween={50}
          slidesPerView={2}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide className="overflow-hidden h-64 flex justify-center items-center">
            <img
              className="h-full w-full"
              src="https://assets-global.website-files.com/633c3f6cb573b7ca538e9ffa/639b78f4806369ac8c0d944d_WestJet_Christmas%20Miracle.00_01_41_07.Still014-p-1080.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden h-64 flex justify-center items-center">
            <img
              className="h-full w-full"
              src="https://assets-global.website-files.com/633c3f6cb573b7ca538e9ffa/639b7937d471181c6ad7b432_WestJet_Christmas%20Miracle.00_02_32_03.Still021-p-1080.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden h-64 flex justify-center items-center">
            <img
              className="h-full w-full"
              src="https://assets-global.website-files.com/633c3f6cb573b7ca538e9ffa/639b791c647ed2ea5ef85cf0_WestJet_Christmas%20Miracle.00_02_25_15.Still022-p-1080.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden h-64 flex justify-center items-center">
            <img
              className="h-full w-full"
              src="https://assets-global.website-files.com/633c3f6cb573b7ca538e9ffa/639b7937d471181c6ad7b432_WestJet_Christmas%20Miracle.00_02_32_03.Still021-p-1080.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full lg:py-20 py-10 lg:px-28 px-5 lg:grid hidden lg:gap-16 gap-5">
        <Reveal>
          <h1
            className={
              "lg:text-8xl text-3xl font-semibold w-full gradientText " +
              syne.className
            }
          >
            More Projects
          </h1>
        </Reveal>
        <div className="w-full flex flex-col items-center lg:gap-10 gap-7">
          <div className="w-full grid lg:grid-cols-12 grid-cols-1 ">
            <CreationCard className={"lg:col-span-6"} />
            <CreationCard className={"lg:col-span-6"} />
            {/* <Link
              href={"/creation"}
              className="group/creation lg:col-span-6 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 "
            >
              <img
                className="object-center h-full w-full object-cover"
                src="https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg"
              />
              <div className="p-6 h-full w-full bg-gradient-to-b flex flex-col justify-end from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0">
                <h2
                  className={
                    "gradientText delay-75  relative bottom-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:bottom-3 group-hover/creation:bottom-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white " +
                    syne.className
                  }
                >
                  WAHL MEA
                </h2>
              </div>
            </Link>
            <div className="group/creation lg:col-span-6 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 ">
              <img
                className="object-center h-full w-full object-cover"
                src="https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg"
              />
              <div className="p-6 h-full w-full bg-gradient-to-b flex flex-col justify-end from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0">
                <h2
                  className={
                    "gradientText delay-75  relative bottom-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:bottom-3 group-hover/creation:bottom-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white " +
                    syne.className
                  }
                >
                  WAHL MEA
                </h2>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-full lg:py-28 py-10 lg:px-28 px-5 ">
        <p
          className={
            "lg:text-8xl text-4xl font-semibold text-center " + syne.className
          }
        >
          Let's Start
          <br />
          Something!
        </p>
        {/* <div className='w-full py-10 bg-gradient-to-b lg:from-white/40 from-white/20 to-white/0  flex flex-col items-center gap-10 border border-white/50 rounded-3xl'></div> */}
      </div>
    </Layout>
  );
};

export default Creation;
