import Image from 'next/image'
import React from 'react'
import styles from '/styles/Cta.module.css'

import token1 from '../public/assets/token1.png'
import z1 from '../public/assets/z1.png'
import z2 from '../public/assets/z2.png'
import curvy from '../public/assets/curvy.png'


const Cta = () => {
  const mostPopularCharger = {
    token_image: token1,
    owner_image: z1,
    owner: "McJovial",
    token_name: "Helion Charger 2.0",
    description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers",
    link: "#",
    likes: 4500,
    liked: [
      {image: z1},
      {image: z2},
      {image: z1},
    ],
  }
   const popularChargers = [
    { token_image: z1, owner_image: z1, owner: "McJovial", token_name: "Neon Chargers", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#", likes: 4500, liked: [], top: '40', right: '-610', index: '3' },
    { token_image: z2, owner_image: z2, owner: "McJovial", token_name: "Gold Chargers", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#", likes: 4500, liked: [], top: '20', right: '-300', index: '2' },
    { token_image: z1, owner_image: z1, owner: "McJovial", token_name: "Silver Chargers", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#", likes: 4500, liked: [], top: '', right: '', index: '1' },
  ]
  return (
    <div className={styles.ctaContainer} style={{backgroundImage: `url(${curvy.src})`, backgroundSize: '100% 100%', margin: 0}}>
      <div className={styles.Cta}>
        <div className={styles.ctaRow}>
          <div className={styles.ctaDetails}>
            <p className={styles.charger}>#{mostPopularCharger.token_name}</p>
            <div className={styles.something}>
              <div className={styles.avatars}>
                {mostPopularCharger.liked.map((person, i) => (
                  <div className={styles.avatarsItem} key={i}>
                    <div className={styles.avatarsImage}>
                      <Image src={person.image} alt="" width={70} height={70} />
                    </div>
                  </div>      
                ))
                }
              </div>
            </div>
            <p className={styles.text}>Ever thought of getting something new, somethng incredible, 
              something out of this world? We present you with something advance it’s like holding the ifinity gunlet on your hand</p>
            <a href="#" className={styles.btn}>Learn More</a>
          </div>
          <div className={styles.tokenStack}>
            {
              popularChargers.map((charger, i) => (
                <div key={i} className={styles.stackItem}>
                  <div className={styles.stackImage}  style={{ position: 'relative', top: `${charger.top}px`, zIndex: `${charger.index}` }}>
                    <Image src={charger.token_image} alt="" width={330} height={330} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    <div className={styles.featuresContainer}>
      <h2 className={styles.title}>Why Choose eVolt</h2>
      <div className={styles.featureRow}>
        <div className={styles.feature}>
          <div className={styles.iconDiv}>
            <div className={styles.iconPod} style={{backgroundColor: '#0989FF'}}></div>
          </div>
          <p className={styles.heading}>Fast to sell</p>
          <p className={styles.body}>No need to get worried on how to sell your chargers. Just auction them and leave the rest to us.</p>
          <a href="" className={styles.btn} style={{backgroundColor: '#0989FF'}}>Learn More</a>
        </div>
        <div className={styles.feature}>
          <div className={styles.iconDiv}>
            <div className={styles.iconPod} style={{backgroundColor: '#E91F37'}}></div>
          </div>
          <p className={styles.heading}>Safe Transaction</p>
          <p className={styles.body}>No need to get worried on how to sell your chargers. Just auction them and leave the rest to us.</p>
          <a href="" className={styles.btn} style={{backgroundColor: '#E91F37'}}>Learn More</a>
        </div>
        <div className={styles.feature}>
          <div className={styles.iconDiv}>
            <div className={styles.iconPod} style={{backgroundColor: '#DD40E0'}}></div>
          </div>
          <p className={styles.heading}>Low Coin Exchange</p>
          <p className={styles.body}>No need to get worried on how to sell your chargers. Just auction them and leave the rest to us.</p>
          <a href="" className={styles.btn} style={{backgroundColor: '#DD40E0'}}>Learn More</a>
        </div>
      </div>
    </div>
    <br/><br/>
  </div>
  )
}

export default Cta