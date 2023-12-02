import { useState, useRef } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [volume, setVolume] = useState(0.5);
  // const [isFullScreen, setIsFullScreen] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullScreen = () => {
    const video = videoRef.current;
    if (!isFullScreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    const volumeValue = e.target.value;
    video.volume = volumeValue;
    setVolume(volumeValue);
  };

  return (
    <div className="relative">
      <video ref={videoRef} src={src} className="w-full h-screen rounded-xl object-cover" controls></video>
    </div>
  );
};

export default VideoPlayer;
