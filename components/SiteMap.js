import React from 'react'
import styles from '../styles/Footer.module.css'


const SiteMap = () => {
  return (
    <div className={styles.over}>
      <hr></hr>
      <div className={styles.siteMap}>
        <span>Terms of use</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  )
}

export default SiteMap