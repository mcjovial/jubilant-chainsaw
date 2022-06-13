import { useState, useEffect } from "react"
import Image from "next/image"
import styles from '/styles/Hero.module.scss'
import { AiOutlineDoubleLeft, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    console.log(newIndex)
  }
  
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.sliderStyles}>
        <div>
          <div onClick={goToPrevious} className={styles.leftArrowStyles}>
            <AiOutlineLeft/>
          </div>
          <div onClick={goToNext} className={styles.rightArrowStyles}>
            <AiOutlineRight/>
          </div>
        </div>

        <div className={styles.slideStyles}>
          <Image src={slides[currentIndex].image} alt={slides[currentIndex].title} width={1500} height={600} />
          <div className={styles.text}>
            <h1>{slides[currentIndex].title}</h1>
            <p>{slides[currentIndex].description}</p>
            <a href={slides[currentIndex].link}>Explore Now</a>
          </div>
        </div>
        <div className={styles.dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              className={styles.dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              style={ currentIndex === slideIndex ? { backgroundColor: '#bbb'} : {}}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;