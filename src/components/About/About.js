import React from 'react'
import Typewriter from 'typewriter-effect';
import './About.css'

const About = () => {
  return (
    <div>
<Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString('<span class="small">Hello World! I am</span><br/>')
      .typeString('<span class="medium"> Mamoona Arshad.</span><br/>')
      .typeString('<span class="large"> _ Frontend Developer</span>')
      .pauseFor(250)
      .start();
  }}
/>
    </div>
  )
}

export default About