// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component using JSX which follows the same symantex as html,
// it is how the JS wil talk to react
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Taylor Swift Albums'} />
    <AlbumList />
  </View>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
