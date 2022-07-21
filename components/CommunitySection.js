import React from 'react'
import styles from '../styles/CommunitySection.module.css'
import { FaDiscord } from 'react-icons/fa'

const CommunitySection = () => {
  return (
    <div className={styles.communityContainer}>
      <p style={{color: '#000', fontSize: '50px', fontWeight: 'lighter'}}>Join Our <span className={styles.boldTitle}>Community</span></p>
      <p className={styles.text}>Meet the eVOLT team, clients and collectors for platform updates, announcements, and more...</p>
      <br/>
      <a className='inline-flex items-center' type='button' href="#">
        <FaDiscord size='2em' />
        <span className='ml-5'>Launch Discord</span>
      </a>
    </div>
  )
}

export default CommunitySection