import React from 'react'
import styles from '/styles/AboutSection.module.css'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>eVolt helps create and design the perfect car chargers for your  personal and business use. Each charger has an evolved version, it cannot be replicated, taken away, or destroyed.Its something new and incredible.</p>
      <br/>
      <a href="#">Get in Touch</a>
    </div>
  )
}

export default About