import React from 'react';
import { Image } from '@nextui-org/react';
import useEmblaCarousel from 'embla-carousel-react';

import profileCover2 from '../static/profile-cover-2.png';
import profileCover3 from '../static/profile-cover-3.png';
import profileCover from '../static/profile-cover.png';
import { CarouselDotButton, useDotButton } from './carousel-dot-buttons';

import './carousel.css';

const images = [profileCover, profileCover2, profileCover3];

export const FeaturePhotos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={index}
                alt="profile cover"
                // className="w-screen"
                className="h-[200px] w-screen object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <CarouselDotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
