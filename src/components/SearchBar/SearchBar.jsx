import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Music Library</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search music library"
            name="s" 
        />
        <button type="submit">Search</button>
    </form> );
    }
}
 
export default SearchBar;