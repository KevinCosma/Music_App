import React, { Component } from 'react';
import MusicTable from './components/MusicTable/MusicTable';
import SearchBar from './components/SearchBar/SearchBar';
import SongForm from './components/SongForm/SongForm';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      musicLibrary: [ 
       { 
        name: "It's My Life",
        artist: "Bon Jovi",
        album: "Crush",
        genre: "Rock"
        },
        {
          name: "Bohemian Rhapsody",
          artist: "Queen",
          album: "A Night at the Opera",
          genre: "Rock"
        },
        {
          name: "Sweet Child O'Mine",
          artist: "Guns N Roses",
          album: "Appetite for Destruction",
          genre: "Rock"
        }
        ]  
     }
  }

  componentDidMount() {
    this.getAllSongs();
  }

  async getAllSongs() {
    try{
      let response = await axios.get('http://127.0.0.1:8000/music');
      this.setState({
        musicLibrary: response.data
      });
    }
    catch (ex) {
      console.log('Error in API call!');
    }
  }

  async getSpecificSong() {
    try{
      let response = await axios.get('http://127.0.0.1:8000/music');
      this.setState({
        musicLibrary: response.data
      });
    }
    catch (ex) {
      console.log('Error in API call!');
    }
  }

  async addNewSong() {
    try{
      let response = await axios.get('http://127.0.0.1:8000/music');
      this.setState({
        musicLibrary: response.data
      });
    }
    catch (ex) {
      console.log('Error in API call');
    }
  }

  async updateSong() {
    try{
      let response = await axios.get('http://127.0.0.1:8000/music');
      this.setState({
        musicLibrary: response.data
      });
    }
    catch (ex) {
      console.log('Error in API call!');
    }
  }

  async deleteSong() {
    try{
      let response = await axios.get('http://127.0.0.1:8000/music');
      this.setState({
        musicLibrary: response.data
      });
    }
    catch (ex) {
      console.log('Error in API call!');
    }
  }

  render() { 
    return ( 
      <div>
        <MusicTable songLibrary={this.state.musicLibrary} />
        <SearchBar  />
        <SongForm update={this.state.musicLibrary}/>
        <button onClick={this.getAllSongs}></button>
      </div>
     );
  }
}
 
export default App;
