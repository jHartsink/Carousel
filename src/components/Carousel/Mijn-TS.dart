const buttons: Array<HTMLButtonElement> = Array.from(

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
      const slides = button.closest('[data-carousel]')?.querySelector('[data-slides]');
      if (slides) {
        const activeSlide: HTMLImageElement | null = slides.querySelector(
          '[data-active]',
        ) as HTMLImageElement;
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
  
        (slides.children[newIndex] as HTMLImageElement).dataset.active = '';
        delete activeSlide.dataset.active;
      }
    });
  });

  