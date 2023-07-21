import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';
import { setCurrentSong } from '../../../redux/actions';
import ImageLoader from '../ImageLoader/ImageLoader';

const Song = ({loading, song, setCurrentSong}) => {

	const secondsToMinutes = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time - (minutes*60);

		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	const handleClick = (event) => {
		if(loading) return;
		setCurrentSong(song);
	}
	
  return (
	<div style={{cursor: 'pointer'}} className="row" onClick={handleClick}>
		<div className="small iconSpace">
			<div className="icon playing">

			</div>
			<div className="icon pause">
				<div className="bar"></div><div className="bar"></div>
			</div>
		</div>
		<div className="small">
			{
				loading ? 
				<Skeleton
				circle
				height={'48px'}
				width={"48px"}
				className='song-icon'
				/>
				:
				<ImageLoader 
				className={'song-icon'}  
				src={!loading && song.photo} 
				alt=""
				width={"48px"}
				height={"48px"}
				/>
			}
		</div>
		<div className="songTitle">
            <div className="big">{loading ? <Skeleton width={"100%"} /> : song.title.length > 20 ? song.title.slice(0, 20) + '...' : song.title}</div>
            <div className='small'>{loading ? <Skeleton width={"70%"} /> : song.artist }</div>
        </div>
		<div className="small">
			{!loading && secondsToMinutes(song.duration)}
		</div>
	</div>
  )
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentSong: (song) => dispatch(setCurrentSong(song))
});

export default connect(null, mapDispatchToProps)(Song);