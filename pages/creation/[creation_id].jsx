"use client";

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
import React, { useEffect, useState } from "react";
import CreationCard from "@/components/CreationCard";
import axios from "axios";
import { useRouter } from 'next/router'
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

  const router = useRouter();
  const [data, setData] = useState();
  const [creations, setCreations] = useState([]);

  useEffect(() => {
    axios(`https://huckster-backend.vercel.app/get-creation-by-id/${router.query.creation_id}`)
      .then((res) => {
        setData(res.data.response)
      })
      .catch((err) => {

      })
    axios("https://huckster-backend.vercel.app/get-creation", {
      method: "GET"
    })
      .then((res) => {
        setCreations(res.data.response)
      })
      .catch((err) => {

      })
  }, [router])

  return (
    <Layout>
      <HeroSection
        heading={
          <p>
            {data?.title}
          </p>
        }
        para={
          ""
        }
        img={
          data?.image
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
        <video src={data?.videoURL} className="rounded-lg w-full h-screen object-cover" autoPlay controls></video>
      </section>

      <Reveal>
        <section className="w-screen lg:py-20 py-10 lg:px-28 px-5 grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-8">
            <p className={"text-4xl leading-snug " + syne.className} dangerouslySetInnerHTML={{ __html: data?.description }}></p>
            <div
              className={
                "text-xl py-4 font-medium flex flex-col gap-2 " + syne.className
              }
            >
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accentgray"></div>
                <p className="">Brand: {data?.brand}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accenttan"></div>
                <p className="">Campaign: {data?.campaign}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accentorange"></div>
                <p className="">Video: @{data?.videographer}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accentblue"></div>
                <p className="">Year: {data?.year}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-accentteal"></div>
                <p className="">Location: {data?.location}</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      <div className={data?.image_list?.length == 0 || data?.image_list?.length == undefined ? "hidden" : "w-full lg:py-20 py-10 lg:px-28 px-5 lg:grid hidden lg:gap-16 gap-5"}>
        <Reveal >
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
          {
            data?.image_list?.map((img) => {
              return <SwiperSlide className="overflow-hidden h-64 flex justify-center items-center">
                <img
                  className="h-full w-full"
                  src={img}
                  alt=""
                />
              </SwiperSlide>
            })
          }
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
            {
              creations?.slice(0, 4)?.filter((value) => {
                return value?._id !== router.query.creation_id && value?.display
              })?.map((value) => {
                return <CreationCard data={value} className={"lg:col-span-6"} />
              })
            }
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
