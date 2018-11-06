import React, { Component } from 'react';
import axios from "axios";
import AlbumItem from './AlbumItem'


const AlbumListToDisplay= {
  display: 'flex',      //The flex-wrap property specifies whether the flexible items should wrap or not.
  flexWrap: 'wrap', 
}


class AlbumList extends Component {
  state={
    albums:[]
  }
  //componentDidMount life cycle we perform HTTP.GET A PARTICULAR URLL jsonplaceholder
  // we get the data from the result of the promise
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/albums').then(res => 
    this.setState({
      albums:res.data 

    }));

  }
  render() {
    return (
      <div style={AlbumListToDisplay}>
      {this.state.albums.map(album=><AlbumItem key={album.id} album={album}></AlbumItem>

      )}
     
      </div>
    );
  }
}

export default AlbumList;
