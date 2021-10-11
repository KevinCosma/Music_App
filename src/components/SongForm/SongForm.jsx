import React, { Component } from 'react';


class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSong: '',
            newArtist: '',
            newAlbum: '',
            newReleaseDate: '',
            newGenre: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() { 
        return ( <form onSubmit={this.props.update}>
                <label>Song</label>
                <input type="text" name="newSong" onChang={this.handleChange} value={this.state.newSong}/>
                <label>Artist</label>
                <input type="text" name="newSong" onChang={this.handleChange} value={this.state.newSong}/>
                <label>Album</label>
                <input type="text" name="newSong" onChang={this.handleChange} value={this.state.newSong}/>
                <label>Release Date</label>
                <input type="text" name="newSong" onChang={this.handleChange} value={this.state.newSong}/>
                <label>Genre</label>
                <input type="text" name="newSong" onChang={this.handleChange} value={this.state.newSong}/>
                <button>Submit</button>
            </form> );
    }
}
 
export default SongForm;