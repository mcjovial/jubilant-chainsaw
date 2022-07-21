import React, { useRef, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineHeart, HiHeart } from "react-icons/hi";
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import styles from '../styles/Slider.module.css'


const SimpleSlider = () => {
  const [like, setLike] = useState(false)
  const sliderRef = useRef(null)
  console.log(sliderRef.current);

  const chargers = [
    { token_image: "http://localhost:3000/assets/token1.png", owner_image: "http://localhost:3000/assets/z1.png", owner: "McJovial", token_name: "Neon Chargers", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#", likes: 4500, liked: [] },
    { token_image: "http://localhost:3000/assets/token2.png", owner_image: "http://localhost:3000/assets/z2.png", owner: "McJovial", token_name: "Gold Chargers", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#", likes: 4500, liked: [] },
    { token_image: "http://localhost:3000/assets/token3.png", owner_image: "http://localhost:3000/assets/z3.png", owner: "McJovial", token_name: "Silver Chargers", description: "Purchase e-electric car chargers using tokens (NFTs) and get the best offers", link: "#", likes: 4500, liked: [] },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
  
  return (
    <div className={styles.popularChargers}>
      <div className={styles.heading}>
        <div className={styles.headingText}>
          <p className='text-2xl mb-0 font-bold'>Popular Chargers</p>
          <p className='text-sm text-gray-400'>Get the latest car chargers</p>
        </div>
        <div className='flex self-center'>
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
                <Image className={styles.author} src={charger.owner_image} alt="author" width={60} height={60} />
              </div>
              <div className={styles.flexContainer}>
                <div className={styles.authorName}>
                  <h2>{charger.token_name}</h2>
                  <p className='text-xs text-gray-400'>{charger.owner}</p>
                </div>
                <div className={styles.authorLikes}>
                  {like
                    ? <BsHeartFill className={styles.like} />
                    : <BsHeart className={styles.like} />
                  }
                  <p>{kFormatter(charger.likes)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SimpleSlider