'use client';

import { CustomImage } from '../CustomImage';
import styles from './ProjectImages.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Lazy } from 'swiper/modules';
import { useRef } from 'react';
import ArrowIcon from '../Icons/ArrowIcon';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/lazy';

interface Props {
  images: string[];
}

export const ProjectImages = ({ images }: Props) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Swiper
      modules={[Navigation, Autoplay, Lazy]}
      slidesPerView={1}
      navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      onBeforeInit={(swiper) => {
        Object.assign(swiper.params.navigation, {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        });
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      lazy
      grabCursor
      className={styles.swiper}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <div className={styles.image}>
            <CustomImage
              src={src}
              alt={`Project image ${index + 1}`}
              fill
              blur
            />
          </div>
        </SwiperSlide>
      ))}
      <button
        ref={prevRef}
        className={`${styles.navButton} ${styles.prev}`}
        aria-label="previous image"
      >
        <ArrowIcon />
      </button>
      <button
        ref={nextRef}
        className={`${styles.navButton} ${styles.next}`}
        aria-label="next image"
      >
        <ArrowIcon />
      </button>
    </Swiper>
  );
};
