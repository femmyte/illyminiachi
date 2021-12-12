import React, { useState } from 'react'
import data from './audio'
const Music = () => {
  const [songs, setSongs] = useState(data)
  return (
    <div className='row'>
      {songs.map((song) => {
        const { url, img } = song
        console.log(url, img)
        return (
          <div className='col-6 mt-4 mx-auto'>
            <div className='music-image mx-auto'>
              <a href={url} target='_blank'>
                <img src={img} className='image' alt='' />
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Music
