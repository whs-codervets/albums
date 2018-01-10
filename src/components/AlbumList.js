import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] }; // initial empty state an empty array for the data

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
      
  }

renderAlbums() {
  return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  // we want to change from showing text tag to AlbumDetail
  // return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
}

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
      // <View>
      //   <Text>Album List!!!!</Text>
      // </View>
    );
  }
}

export default AlbumList;
