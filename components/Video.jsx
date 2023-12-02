import { useState, useRef } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isFullScreen, setIsFullScreen] = useState(false);

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
      <video ref={videoRef} src={src} className="w-full" controls></video>
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 px-4 flex items-center justify-between">
        <button onClick={togglePlay} className="text-white">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={toggleFullScreen} className="text-white">
          {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
