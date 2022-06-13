import React from 'react'
import Image from 'next/image'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'
import styles from '../styles/Footer.module.css'
import logo from '../public/assets/eVOLTS.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <Image src={logo} alt='Logo' width={150} height={30} />
          <div className={styles.footerSocial}>
            <p>Follow Us</p>
            <div className={styles.footerIcons}>
              <BsInstagram size='1.7em' className={styles.icon}/>
              <BsTwitter size='1.7em' className={styles.icon}/>
              <AiFillFacebook size='1.7em' className={styles.icon} />
              <SiDiscord size='1.7em' className={styles.icon}/>
            </div>
          </div>
        </div>
        <div className={styles.footerItem}>
          <p>Company</p>
          {/* <ul> */}
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          {/* </ul> */}
        </div>
        <div className={styles.tabView}>
          <div className={styles.footerItem}>
            <p>Contact</p>
            {/* <ul> */}
              <li>Help/FAQ</li>
              <li>Contributors</li>
              <li>Partners</li>
            {/* </ul> */}
          </div>
          <div className={styles.footerItem}>
            <p>More</p>
            {/* <ul> */}
              <li>Marketplace</li>
              <li>Badges</li>
              <li>Ranks</li>
            {/* </ul> */}
          </div>
        </div>
      </div>
      {/* <div className={styles}>
        <span>Terms of use</span>
        <span>Privacy Policy</span>
      </div> */}
    </footer>
  )
}

export default Footer