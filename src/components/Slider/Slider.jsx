import { useEffect, useRef, useState } from 'react';
import leftChevron from '../../assets/left-arrow.svg';
import rightChevron from '../../assets/right-arrow.svg';
import sliderData from '../../data/sliderData';
import './Slider.css';

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const intervalID = useRef(null);

  function toggleImage(indexPayload) {
    setSliderIndex((prevIndex) => {
      if (prevIndex + indexPayload > sliderData.length) {
        return 1;
      } else if (prevIndex + indexPayload < 1) {
        return sliderData.length;
      } else {
        return prevIndex + indexPayload;
      }
    });
  }

  function resetInterval() {
    if (intervalID.current) {
      clearInterval(intervalID.current);
    }

    intervalID.current = setInterval(() => {
      toggleImage(1);
    }, 2000);
  }

  useEffect(() => {
    resetInterval();

    return () => clearInterval(intervalID.current);
  }, []);

  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((slide) => slide.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-img"
        />

        <button
          className="navigation-button prev-button"
          onClick={() => {
            toggleImage(-1);
            resetInterval();
          }}
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          className="navigation-button next-button"
          onClick={() => {
            toggleImage(1);
            resetInterval();
          }}
        >
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  );
}
