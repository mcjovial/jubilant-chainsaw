import React, { useState } from 'react'
import Image from 'next/image'
import styles from '/styles/Hero.module.scss'
import ImageSlider from './ImageSlider';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: "http://localhost:3000/assets/slide1.png", title: "Find the good car charger that suits your taste", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#" },
    { image: "http://localhost:3000/assets/slide2.png", title: "Find the better car charger that suits your taste", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#" },
    { image: "http://localhost:3000/assets/slide3.png", title: "Find the best car charger that suits your taste", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#" },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.slideshowContainer}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default Hero