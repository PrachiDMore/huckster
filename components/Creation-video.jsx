import React, { useState } from 'react';
import { useRouter } from "next/router";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { AiOutlineVolumeUp, AiOutlineVolumeDown } from 'react-icons/ai';
import { FiFullscreen, FiFullscreenExit } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';

const video = React.createRef();

const VideoSection = () => {
	const router = useRouter();
	const [playing, setPlaying] = useState(false);
	const [volume, setVolume] = useState(0.5);
	const [fullscreen, setFullscreen] = useState(false);

	const handlePlayPause = () => {
		if (playing) {
			video.current.pause();
			setPlaying(false);
		} else {
			video.current.play();
			setPlaying(true);
		}
	};

	const handleVolumeChange = (event) => {
		const newVolume = event.target.value / 100;
		setVolume(newVolume);
		video.current.volume = newVolume;
	};

	const handleFullscreenToggle = () => {
		setFullscreen(!fullscreen);
		if (fullscreen) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	};

	return (
		<div className="relative w-full h-auto">
			<video
				ref={video}
				src="/video.mp4"
				width="100%"
				height="100%"
				className="object-cover"
				loop
			/>

			<div className="absolute inset-0 flex justify-center items-center">
				<div className="flex flex-col items-center">
					<button
						className="bg-white rounded-full p-2 hover:bg-gray-200"
						onClick={handlePlayPause}
					>
						{playing ? <FiArrowLeft /> : <FiArrowRight />}
					</button>

					<div className="flex flex-row items-center">
						<button
							className="bg-white rounded-full p-2 hover:bg-gray-200 w-20"
							onClick={handleVolumeChange}
							value={volume * 100}
							type="range"
							min="0"
							max="100"

						/>

						{volume > 0 ? (
							<AiOutlineVolumeUp className="ml-2" />
						) : (
							<AiOutlineVolumeDown className="ml-2" />
						)}
					</div>

					<button
						className="bg-white rounded-full p-2 hover:bg-gray-200"
						onClick={handleFullscreenToggle}
					>
						{fullscreen ? <FiFullscreenExit /> : <FiFullscreen />}
					</button>
				</div>
			</div>
		</div>
	);
};

export default VideoSection;
