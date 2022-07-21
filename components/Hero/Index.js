import React, { useState } from 'react'
import Image from 'next/image'
import styles from '/styles/Hero.module.scss'
import ImageSlider from './ImageSlider';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg", title: "Find the good car charger that suits your taste", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#" },
    { image: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg", title: "Find the better car charger that suits your taste", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#" },
    { image: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg", title: "Find the best car charger that suits your taste", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#" },
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