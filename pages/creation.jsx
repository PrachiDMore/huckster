import Layout from '@/components/Layout'
import React from 'react'
import { Inter, Syne } from 'next/font/google'
import Video from '@/components/video'
import videojs from 'video.js'
import Reveal from '@/components/Reveal'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

const creation = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: '/path/to/video.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <Layout>
      <section className='w-screen h-screen flex flex-col justify-center lg:py-20 py-14 lg:px-28 px-5'>
        <p className={'lg:text-9xl text-3xl font-semibold w-full gradientText ' + syne.className}>WAHL MEA</p>
        <p className={'lg:text-3xl text-xl font-semibold w-full ' + inter.className}>by #hucksterproductions</p>
      </section>

      <section>
        {/* <Video options={videoJsOptions} onReady={handlePlayerReady} /> */}
      </section>

      <section className='w-screen  flex flex-col justify-center lg:py-20 py-10 lg:px-28 px-5'>
        <p className={'text-2xl font-medium ' + inter.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content. The content ⚽️ 🏃and the location ⛰ injected a true spirit of team work and consistency within us. Shot during the mid-summer, under the 45℃ 🥵! Shout out to everyone in this project 🙌🏻 GHG calculations in-line! ♻️</p>
        <div className={'text-xl py-4 font-medium ' + inter.className}>
          <p>• Brand: @wahl_mea</p>
          <p>• Campaign: :”GROOMING ASPIRATIONS SINCE 1919”</p>
          <p>• 🎥 @ARRIChannel </p>
          <p>• Year: 2022</p>
          <p>• Location: U.A.E.</p>
        </div>

      </section>

      <section className='w-full lg:py-20 py-10 lg:px-28 px-5 '>
        <Reveal><h1 className={'lg:text-8xl text-3xl font-semibold w-full gradientText ' + syne.className}>Frames</h1></Reveal>

        
      </section>

      <div className='w-full lg:py-20 py-10 lg:px-28 px-5 lg:grid hidden lg:gap-16 gap-5'>
        <Reveal><h1 className={'lg:text-8xl text-3xl font-semibold w-full gradientText ' + syne.className}>More Projects</h1></Reveal>
        <div className='w-full flex flex-col items-center lg:gap-10 gap-7'>
          <div className='w-full grid lg:grid-cols-12 grid-cols-1 gap-3'>
            <Link href={'/creation'} className='group/creation lg:col-span-8 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
              <img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
              <div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
                <h2 className={'gradientText delay-75  relative top-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:top-4 group-hover/creation:top-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>WAHL MEA</h2>
                {/* <p className={'delay-75 relative bottom-0 left-0 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
              </div>
            </Link>
            <div className='group/creation lg:col-span-4 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
              <img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
              <div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
                <h2 className={'gradientText delay-75  relative top-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:top-4 group-hover/creation:top-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
                {/* <p className={'delay-75 relative bottom-0 left-0 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
              </div>
            </div>
            <div className='group/creation lg:col-span-4 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
              <img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
              <div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
                <h2 className={'gradientText delay-75  relative top-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:top-4 group-hover/creation:top-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
                {/* <p className={'delay-75 relative bottom-0 left-0 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
              </div>
            </div>
            <div className='group/creation lg:col-span-8 cols-span-1 h-96 overflow-hidden duration-150 rounded-3xl relative border border-white/30 '>
              <img className='object-center h-full w-full object-cover' src='https://framerusercontent.com/images/8B7sYF56wceOr6bVtMHU3R29WvM.jpg' />
              <div className='p-6 h-full w-full bg-gradient-to-b flex flex-col justify-between from-black/80 via-black/10 to-black/30 group-hover/creation:bg-black/50 absolute top-0 left-0'>
                <h2 className={'gradientText delay-75  relative top-0 left-0 lg:group-hover/creation:left-4 group-hover/creation:left-2 lg:group-hover/creation:top-4 group-hover/creation:top-2 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 lg:text-3xl text-xl font-semibold text-white ' + syne.className}>Corporate Videos</h2>
                {/* <p className={'delay-75 relative bottom-0 left-0 opacity-0 group-hover/creation:opacity-100 transition-all ease-in-expo duration-700 font-normal text-white ' + syne.className}>While we all continue the celebration of the successful #fifaworldcup2022qatar  campaign, we had the opportunity to work with WAHL MiddleEast to develop and visualize this aspirational content.</p> */}
              </div>
            </div>
          </div>
          {/* <Button className={"w-48"} text={"Watch More"} /> */}
        </div>
      </div>

      <div className='w-full lg:py-28 py-10 lg:px-28 px-5 '>
        <div className='w-full py-10 bg-gradient-to-b lg:from-white/40 from-white/20 to-white/0  flex flex-col items-center gap-10 border border-white/50 rounded-3xl'>
          <img className='lg:w-36 w-28' src="/assets/HucksterLogo.png" alt="" />
          <div className=' '>
            <p className={'lg:text-8xl text-4xl font-semibold text-center ' + syne.className}>Let's Start<br />Something!</p>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default creation
