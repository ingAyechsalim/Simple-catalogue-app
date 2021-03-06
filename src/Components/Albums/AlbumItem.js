import React from 'react'
import {Link} from 'react-router-dom'
const albumItemContainer = {
  margin: '20px',
  width: '410px',
  border: '5px solid pink',
  borderRadius: '12px 0px',
  backgroundColor:'#18dcff'

};

const albumTitle = {
  fontSize: '16px',
  textAlign: 'center',
  fontFamily: "sans-serif",


};
const imageAlbum={
  borderRadius: '12px 0px',

};
const AlbumItem = (props) => {
  return (
    <div style={albumItemContainer} >
      <div >
    
     
            <img style={imageAlbum} src="https://secure.photobox.com/assets/content_graphics/67/160467.jpg?1506089102" alt="description of albums"/>

          </div>
          <div >
            <p style={albumTitle}>{props.album.title}</p>
          </div >

    </div>
  )
}

export default AlbumItem
