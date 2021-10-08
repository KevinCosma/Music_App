import React from 'react';

const MusicTable = (props) => {
    return ( 
        <div>
            {props.songLibrary.map(function(musicLibrary){
               return(
                <table>
                    <tr><th>Song Name</th><th>Song Artist</th><th>Song Album</th><th>Song Release Date</th><th>Song Genre</th></tr>
                    <tr><td>{musicLibrary.song}</td><td>{musicLibrary.artist}</td><td>{musicLibrary.album}</td><td>{musicLibrary.releaseDate}</td><td>{musicLibrary.genre}</td></tr>
                </table>  
               ) 
            })}
        </div>
     );
}
 
export default MusicTable;