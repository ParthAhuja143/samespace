import { ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import Sidenav from './components/Sidenav/Sidenav'
import SongContainer from './components/SongContainer/SongContainer';
import SongPlayer from './components/SongPlayer/SongPlayer';
import client from './graphql/client';
import { createStore } from './redux/store';

const store = createStore();

export default function App () {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SkeletonTheme baseColor='#000000' highlightColor='#111111' duration={1}>
          <div className='body-container'>
            <Sidenav
            />
            <SongContainer
            />
            <SongPlayer
            />
          </div>
        </SkeletonTheme>
      </Provider>
    </ApolloProvider>
  )
} 