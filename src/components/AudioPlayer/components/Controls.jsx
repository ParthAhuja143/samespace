import { useState, useEffect, useRef, useCallback } from 'react';

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import { connect } from 'react-redux';
import { setCurrentSong } from '../../../redux/actions';

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  currentSong,
  songList,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef?.current?.currentTime ?? 0;
    setTimeProgress(currentTime);
    if(progressBarRef.current){
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current?.value / duration) * 100}%`
      );
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current && audioRef.current.play();
      if(audioRef.current) audioRef.current.volume = volume / 100;
      if(audioRef.current) audioRef.current.muted = muteVolume;
    } else {
      audioRef.current && audioRef.current.pause();
      if(audioRef.current) audioRef.current.volume = volume / 100;
      if(audioRef.current) audioRef.current.muted = muteVolume;
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    const songIndex = songList.findIndex((s) => currentSong._id === s._id);

    if(songIndex == -1){
      setCurrentTrack(songList[0]);
    }
    else{
      if(songIndex <= 0){
        setCurrentTrack(songList[songList.length - 1]);
      }
      else{
        setCurrentTrack(songList[songIndex - 1]);
      }
    }
    /*
    if(audioRef.current){
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
    }
    */
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="controls-wrapper">
        <div className='volume'>
        <button className='primary button'>
            <BsThreeDots />
        </button>
        </div>
      <div className="controls">
        <button className='secondary button' onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>
        {/*
        <button onClick={skipBackward}>
          <IoPlayBackSharp />
        </button>
        */}
        <button className='play button' onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        {/*
        <button onClick={skipForward}>
          <IoPlayForwardSharp />
        </button>
        */}
        <button className='secondary button' onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
      <div className="volume">
        <button className='primary button' onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5 ? (
            <IoMdVolumeOff />
          ) : volume < 40 ? (
            <IoMdVolumeLow />
          ) : (
            <IoMdVolumeHigh />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          style={{
            display: 'none',
            background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentSong: state.currentSong,
  songList: state.songList
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentTrack: (song) => dispatch(setCurrentSong(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);