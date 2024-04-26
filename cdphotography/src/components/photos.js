import React from 'react'

function Photos(props) {
  return (
    <div>
      <h1>Photos are from IPA</h1>
        {props.photos.map((photo) => {
          return (
          <div key={photo.id}>
            <h2>{photo.title}</h2>
          </div>
        )
      })}
    </div>
  )

}


export default Photos;
