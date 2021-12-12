import React, { useState } from 'react'
import data from './videoData'
const Video = () => {
  const [videos, setVideos] = useState(data)
  return (
    <div className='row'>
      {videos.map((video) => {
        return (
          <div className='col-md-6'>
            <iframe
              width='100%'
              height='400'
              src={`https://www.youtube.com/embed/${video}`}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        )
      })}
    </div>
  )
}

export default Video
