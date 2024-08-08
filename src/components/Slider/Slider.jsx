import leftChevron from '../../assets/left-arrow.svg';
import rightChevron from '../../assets/right-arrow.svg';
import './Slider.css';

export default function Slider() {
  return (
    <>
      <p className="index-info">3 / 5</p>
      <div className="slider">
        <p className="image-info">Bedroom</p>
        <img
          src="/images/img-3.jpg"
          alt="estate's rooms"
          className="slider-img"
        />

        <button className="navigation-button prev-button">
          <img src={leftChevron} alt="previous image" />
        </button>
        <button className="navigation-button next-button">
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  );
}
