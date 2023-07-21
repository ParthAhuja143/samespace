import { useLazyQuery, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { GET_SONGS } from '../../graphql/query/songs'
import Song from '../common/Song/Song'
import Searchbar from '../Searchbar/Searchbar'
import { setSongList } from '../../redux/actions'

const SongContainer = (props) => {

	const [search, setSearch] = useState('');
	const [getSongs, {data, loading, error}] = useLazyQuery(GET_SONGS);
	const [componentLoading, setComponentLoading] = useState(false);

	useEffect(() => {
		setComponentLoading(true);
		if(data){
			props.setSongList(data.getSongs)
		}
		
		if(props.currentPlaylistUUID){
			getSongs({
				variables: {
					playlistId: props.currentPlaylistUUID,
					search: search === '' ? null : search,
				}
			})
			setComponentLoading(false);
		}
	}, [props.currentPlaylistUUID, search, data])

  return (
    <div className="song-container">
		<h1>For you</h1>
		<Searchbar 
		search={search}
		setSearch={setSearch}
		/>
		{
		loading || componentLoading ? 
		<>
			<Song loading={loading || componentLoading}/>
			<Song loading={loading || componentLoading}/>
			<Song loading={loading || componentLoading}/>
			<Song loading={loading || componentLoading}/>
			<Song loading={loading || componentLoading}/>
			<Song loading={loading || componentLoading}/>
			<Song loading={loading || componentLoading}/>
		</>
		:
		data && data.getSongs.map(song => (
			<Song song={song} key={song._id}/>
		))
		}
</div>
  )
}

const mapStateToProps = (state) => ({
	currentPlaylistUUID: state.currentPlaylistUUID,
	songList: state.songList,
});

const mapDispatchToProps = (disaptch) => ({
	setSongList: (songList) => disaptch(setSongList(songList))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);