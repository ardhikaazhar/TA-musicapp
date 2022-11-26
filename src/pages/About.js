import React from 'react'
import "./About.css";
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <img className='about-image' src="https://static01.nyt.com/images/2019/02/06/crosswords/06wordplay-music-thumb/06wordplay-music-thumb-superJumbo.jpg" alt="about" />
      <br />
      <p className='about-text'>
      This is simple React app that uses its own API to display music information.
      </p>
    </div>
  )
}
