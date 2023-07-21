const ProgressBar = ({
    progressBarRef,
    audioRef,
    timeProgress,
    duration,
  }) => {
    const handleProgressChange = () => {
      audioRef.current.currentTime = progressBarRef.current.value;
    };
  
    const formatTime = (time) => {
      if (time && !isNaN(time)) {
        const minutes = Math.floor(time / 60);
        const formatMinutes =
          minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(time % 60);
        const formatSeconds =
          seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${formatMinutes}:${formatSeconds}`;
      }
      return '00:00';
    };
  
    return (
      <div className="progress">
        <input
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />    
      </div>
    );
  };
  
  export default ProgressBar;