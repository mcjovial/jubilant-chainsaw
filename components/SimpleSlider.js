import React, { useRef, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineHeart, HiHeart } from "react-icons/hi";
import styles from '../styles/Slider.module.css'


const SimpleSlider = () => {
  const [like, setLike] = useState(true)
  const sliderRef = useRef(null)
  console.log(sliderRef.current);

  const chargers = [
    { token_image: "http://localhost:3000/assets/token1.png", owner_image: "http://localhost:3000/assets/z1.png", owner: "McJovial", token_name: "Neon Chargers", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#", likes: 4500, liked: [] },
    { token_image: "http://localhost:3000/assets/token2.png", owner_image: "http://localhost:3000/assets/z2.png", owner: "McJovial", token_name: "Gold Chargers", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#", likes: 4500, liked: [] },
    { token_image: "http://localhost:3000/assets/token3.png", owner_image: "http://localhost:3000/assets/z3.png", owner: "McJovial", token_name: "Silver Chargers", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#", likes: 4500, liked: [] },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  }
  
  return (
    <div className={styles.popularChargers}>
      <div className={styles.heading}>
        <div className={styles.headingText}>
          <p className={styles.primary}>Popular Chargers</p>
          <p className={styles.secondary}>Get the latest car chargers</p>
        </div>
        <div className={styles.controls}>
          <HiOutlineChevronLeft className={styles.arrow} onClick={() => sliderRef.current.slickPrev()} />
          <HiOutlineChevronRight className={styles.arrow} onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {chargers.map((charger,i) => (
          <div className={styles.column} key={i}>
            <div className={styles.card}>
              <Image src={charger.token_image} alt="Jane" width={530} height={400}/>
              <div className={styles.anyhow}>
                <Image className={styles.author} src={charger.owner_image} alt="author" width={50} height={50} />
              </div>
              <div className={styles.flexContainer}>
                <div className={styles.authorName}>
                  <h2>{charger.token_name}</h2>
                  <p className={styles.title}>{charger.owner}</p>
                </div>
                <div className={styles.authorLikes}>
                  {like
                    ? <HiHeart className={styles.like} />
                    : <HiOutlineHeart className={styles.like} />
                  }
                  <p>{charger.likes}k</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default SimpleSlider