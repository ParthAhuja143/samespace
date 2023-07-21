import { BsMusicNoteBeamed } from 'react-icons/bs'
import {usePalette} from 'react-palette'
import ImageLoader from '../../common/ImageLoader/ImageLoader';
import { connect } from 'react-redux';
import { setAppBackground } from '../../../redux/actions';
import { useEffect } from 'react';
const DisplayTrack = ({
  currentSong,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
  setBackground,
  background
}) => {
  const onLoadedMetadata = () => {
    let seconds = audioRef.current.duration;
    setDuration((prev) => currentSong.duration);
    progressBarRef.current.max = seconds;
  };

  const {data, loading, error} = usePalette(`${currentSong && currentSong.photo}`)

  useEffect(() => {
    if(data){
      console.log(data)
      document.body.style.backgroundImage = `linear-gradient(135deg, ${data.darkVibrant} 0%, #000 100%)`;
      setBackground(data);
    }
  }, [data])

  useEffect(() => {
    if(background && Object.keys(background).length > 0){
      //document.body.style.background = `linear-gradient(135deg, #201606 0%, #000 100%);`;
    }
    else{
      //document.body.style.background = `linear-gradient(135deg, #201606 0%, #000 100%);`;
    }
  }, [background])

  return (
    <div>
      {currentSong && 
      <audio
      key={currentSong._id}
      src={currentSong.url}
      ref={audioRef}
      onLoadedMetadata={currentSong && onLoadedMetadata}
      onEnded={handleNext}
    />
      }
      <div className="audio-info">
      <div className="text">
          <p className="title">{currentSong && currentSong.title}</p>
          <p>{currentSong && currentSong.artist}</p>
        </div>
        <div className="audio-image">
          { currentSong && currentSong.photo ? (
            <ImageLoader key={currentSong.photo} src={currentSong.photo} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentSong: state.currentSong,
  background: state.background,
})

const mapDispatchToProps = (dispatch) => ({
  setBackground: (background) => dispatch(setAppBackground(background))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTrack);