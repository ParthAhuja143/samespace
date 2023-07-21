import { useEffect, useRef, useState } from 'react';
import Controls from './components/Controls';
import DisplayTrack from './components/DisplayTrack';
import ProgressBar from './components/ProgressBar';
import tracks from './../../data'
import { connect } from 'react-redux';
import { setCurrentSong } from '../../redux/actions';

// import components

const AudioPlayer = (props) => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    null
  );
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    const songIndex = props.songList.findIndex((s) => props.currentSong._id === s._id);

    if(songIndex == -1){
      props.setCurrentTrack(props.songList[0]);
    }
    else{
      if(songIndex >= props.songList.length - 1){
        props.setCurrentTrack(props.songList[0]);
      }
      else{
        props.setCurrentTrack(props.songList[songIndex + 1]);
      }
    }
    //if(audioRef) audioRef.current.src = trackIndex >= tracks.length ? 0 : trackIndex + 1;
    /*
    if(audioRef.current){
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
    }
    */
  };

  useEffect(() => {
    if(props.currentSong){
      setCurrentTrack(props.currentSong)
    }
  }, [props.currentSong])

  
  /*useEffect(() => {
    if(audioRef.current && currentTrack){
        audioRef.current.src = currentTrack.url;
        /*
        prominent(currentTrack.url, { amount: 1 }).then(color => {
            console.log(color) // [241, 221, 63]
          })

        //average(currentTrack.url).then(res => console.log(res))
    }
  }, [currentTrack])
  */

  return (
    <>
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack
            {...{
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
          <span className='song-progress-control'>
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
            }}
          />
          </span>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentSong: state.currentSong,
  songList: state.songList
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentTrack: (song) => dispatch(setCurrentSong(song))
})
export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);