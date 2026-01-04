import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface Slide {
  image: string;
  alt: string;
}

interface ImageCarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageCarousel({ slides, autoPlay = true, interval = 5000 }: ImageCarouselProps): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
          >
            <img src={slide.image} alt={slide.alt} className={styles.slideImage} />
          </div>
        ))}
      </div>
      
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
