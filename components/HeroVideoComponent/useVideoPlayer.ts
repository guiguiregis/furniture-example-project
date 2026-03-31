/* eslint-disable no-param-reassign */
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';

const useVideoPlayer: any = (videoElement: any) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [muted, setMuted] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const togglePlay = (): void => {
    setPlaying(!playing);
  };

  const start = (): void => {
    videoElement.current.muted = true;
    videoElement.current.play();
    setPlaying(true);
  };

  const pause = (): void => {
    videoElement.current.pause();
    setPlaying(false);
  };

  useEffect(() => {
    if (playing) {
      videoElement.current.play();
      // if (isMobile) {
      //   if (videoElement.current.requestFullscreen) {
      //     videoElement.current.requestFullscreen();
      //   } else if (videoElement.current.webkitRequestFullscreen) {
      //     videoElement.current.webkitRequestFullscreen();
      //   } else if (videoElement.current.msRequestFullscreen) {
      //     videoElement.current.msRequestFullscreen();
      //   }
      // }
    } else {
      videoElement.current.pause();
    }
  }, [isMobile, playing, videoElement]);

  // keep track of the video's progress
  const handleOnTimeUpdate = (): void => {
    const newProgress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setProgress(newProgress);
  };

  // jump to a new specified time
  const handleVideoProgress = (event: any): void => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setProgress(manualChange);
  };

  // set video's speed like 1x, 1.25x, 2x
  const handleVideoSpeed = (event: any): void => {
    const newSpeed = Number(event.target.value);
    videoElement.current.playbackRate = newSpeed;
    setSpeed(newSpeed);
  };

  const toggleMute = (): void => {
    setMuted(!muted);
  };

  useEffect(() => {
    if (muted) {
      videoElement.current.muted = true;
    } else {
      videoElement.current.muted = false;
    }
  }, [muted, videoElement]);

  return {
    playing,
    progress,
    muted,
    speed,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    start,
    pause,
  };
};

export default useVideoPlayer;
