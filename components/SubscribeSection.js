import React, { useState } from 'react'
import styles from '../styles/SubscribeSection.module.css'

const SubscribeSection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email}`)
  }

  return (
    <div className={styles.subscribeContainer} style={{backgroundImage: `url('http://localhost:3000/assets/subscribe-bg.png')`, backgroundSize: '100% 100%', margin: 0}}>
      <div className={styles.container}>
        <p style={{color: '#6AA94E', fontSize: '50px', fontWeight: 'lighter', marginTop: 0}}>#<span className={styles.boldTitle}>subscribe</span> to our newsletter</p>
        <p className={styles.text}>Meet the eVOLT team, clients and collectors for platform updates, announcements, and more...</p>
        <br/>
        <form onSubmit={handleSubmit} className={styles.form}>    
          <input
            type="email" 
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={styles.formBtn}>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default SubscribeSection