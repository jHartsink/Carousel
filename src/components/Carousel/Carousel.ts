import { defineComponent, refElement, bind, refCollection } from '@muban/muban';
import gsap from 'gsap';
import './Carousel.style.scss';

export const Carousel = defineComponent({
  name: 'carousel',
  components: [],
  refs: {
    previousButton: refElement('previous'),
    nextButton: refElement('next'),
    carousel: refElement('carousel'),
    slides: refCollection('carousel-slide'),
  },
  setup({ refs }) {
    const { previousButton, nextButton, slides } = refs;
    let activeIndex = 0;
    let wantedIndex = -1;

    const positionSlides = () => {
      const offset = wantedIndex > activeIndex ? 1 : -1;
      if (slides) {
        gsap.to(slides.getElements(), {
          xPercent: `${wantedIndex * -100}`,
          duration: 0.8,
          stagger: 0.4 * offset,
          ease: 'expo.inOut',
        });
      }
    };
    const onActiveIndexUpdate = (newIndex: number) => {
      wantedIndex = activeIndex + newIndex;
      if (wantedIndex < 0) return;
      if (wantedIndex >= slides.getElements().length) return;
      positionSlides();
      activeIndex = wantedIndex;
    };
    const onPreviousClick = () => {
      onActiveIndexUpdate(-1);
    };
    const onNextClick = () => {
      onActiveIndexUpdate(1);
    };

    return [
      bind(previousButton, {
        click: () => {
          onPreviousClick();
        },
      }),
      bind(nextButton, {
        click: () => {
          onNextClick();
        },
      }),
    ];
  },
});
