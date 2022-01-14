import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import { firstDivTemplate } from '../firstDiv/FirstDiv.Template';
import type { FirstCarouselProps } from './firstCarousel.props';
import './firstCarousel.style.scss';

export function firstCarouselTemplate({
  title,
  copy,
}: FirstCarouselProps): ComponentTemplateResult {
  return html`<section data-component="foo-component">
    ${firstDivTemplate('check')}
    <h1>${title}</h1>
    <p>${copy}</p>
  </section>`;
}
