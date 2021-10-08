import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        musicLibrary: {
          name: '',
          artist: '',
          album: '',
          releaseDate: 0,
          genre: ''
        }
     }
  }

  componentDidMount() {
    this.getAllSongs();
  }

  async getAllSongs() {
    try{
      let response = await axios.get();
      console.log(response.data)
    }
    catch (ex) {
      console.log('Error in API call!');
    }
  }

  async getSpecificSong() {
    try{
      let response = await axios.get();
    }
    catch (ex) {
      console.log('Error in API call!');
    }
  }

  async addNewSong() {
    try{
      let response = await axios.get();
    }
    catch (ex) {
      console.log('Error in API call');
    }
  }

  async updateSong() {
    try{
      let response = await axios.get()
    }
    catch (ex) {
      console.log('Error in API call!');
    }
  }

  async deleteSong() {
    try{
      let response = await axios.get()
    }
    catch (ex) {
      console.log('Error in API call!');
    }
  }

  render() { 
    return ( 
      <h1>Hello World</h1>
     );
  }
}
 
export default App;
