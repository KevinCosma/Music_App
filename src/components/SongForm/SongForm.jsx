import React from 'react';

class SearchBar extends Component {
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

    render() { 
        return ( <form onSubmit={this.props.coolAlert}>
                <input name="alert" onChange={this.handleChange} value={this.state.} />
                <button>Submit</button>
            </form> );
    }
}
 
export default SearchBar;