import React from 'react'
import Image from 'next/image'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'
import styles from '../styles/Footer.module.css'
import logo from '../public/assets/eVOLTS.png'

const Footer = () => {
  return (
    <footer className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 content'>
        <div className='col justify-between '>
          <Image src={logo} alt='Logo' width={150} height={30} />
          <div className=''>
            <p>Follow Us</p>
            <div className='flex'>
              <BsInstagram size='1.7em' className='icon'/>
              <BsTwitter size='1.7em' className='icon'/>
              <AiFillFacebook size='1.7em' className='icon' />
              <SiDiscord size='1.7em' className='icon'/>
            </div>
          </div>
        </div>
        <div className=''>
          <p>Company</p>
          <div className=''>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </div>
        </div>
        <div className='col align-items-start'>
          <p>Contact</p>
          {/* <ul> */}
            <li>Help/FAQ</li>
            <li>Contributors</li>
            <li>Partners</li>
          {/* </ul> */}
        </div>
        <div className='col align-items-start'>
          <p>More</p>
          {/* <ul> */}
            <li>Marketplace</li>
            <li>Badges</li>
            <li>Ranks</li>
          {/* </ul> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer