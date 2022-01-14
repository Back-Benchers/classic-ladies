import React, {useState} from 'react'
import './Banner.css'
import BtnBanner from './BtnBanner'
import bannerData from './bannerData'

export default function Banner() {
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || '';
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
      if(slideIndex !== bannerData.length){
          setSlideIndex(slideIndex + 1)
      } 
      else if (slideIndex === bannerData.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(bannerData.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }

  return (
      <div className="container-slider">
          {bannerData.map((obj, index) => {
              return (
                  <div
                  key={obj.id}
                  className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                  >
                      <img 
                      src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} 
                      />
                  </div>
              )
          })}
          <BtnBanner moveSlide={nextSlide} direction={"next"} />
          <BtnBanner moveSlide={prevSlide} direction={"prev"}/>

          <div className="container-dots">
              {Array.from({length: 5}).map((item, index) => (
                  <div 
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                  ></div>
              ))}
          </div>
      </div>
  )
}
