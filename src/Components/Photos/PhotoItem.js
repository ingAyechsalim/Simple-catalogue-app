import React from 'react'

const PhotoItem = (props) => {
  return (
    <div>
                  <img style={imageAlbum} src={props.thumbnailUrl}/>
                  <h1> title: {props.photo.title}</h1>
                  <button>Add</button>
    </div>
  )
}

export default PhotoItem
