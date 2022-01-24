/* eslint-disable lit-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/naming-convention */

import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { CarouselProps } from './Carousel.props';

export function CarouselTemplate(
  { carouselSlides }: CarouselProps,
  ref?: string,
): ComponentTemplateResult {
  return html`<div data-component="carousel" data-ref=${ref}>
    <button class="carousel-button previous" data-ref="previous">
      <span dangerouslySetInnerHTML=${{ __html: '&lt;' }}></span>
    </button>

    <button class="carousel-button next" data-ref="next">
      <span dangerouslySetInnerHTML=${{ __html: '&gt;' }}></span>
    </button>

    <div data-ref="carousel" class="carousel" data-carousel>
      <ul class="carousel-wrapper">
        ${carouselSlides.map(({ src, alt }) => {
          return html`<li class="carousel-slide" data-ref="carousel-slide">
            <picture>
              <img src=${src} alt=${alt} />
            </picture>
          </li>`;
        })}
      </ul>
    </div>
  </div>`;
}
