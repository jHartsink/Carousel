/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TemplateMap } from '@muban/template';
import { html } from '@muban/template';
import { renderLazyComponentTemplate } from '../utils/createComponentRenderer';
import { imageTestTemplate } from '../components/image-test/ImageTest.template';
import { toggleExpandTemplate } from '../components/atoms/toggle-expand/ToggleExpand.template';
import { videoTestTemplate } from '../components/video-test/VideoTest.template';
import { firstCarouselTemplate } from '../components/HTML/firstCarousel.template';

const componentMap = {
  'toggle-expand': toggleExpandTemplate,
  'image-test': imageTestTemplate,
  'video-test': videoTestTemplate,
  firstCarousel: firstCarouselTemplate,
};

export type BlockRendererTemplateProps = {
  blocks: Array<TemplateMap<typeof componentMap>>;
};

export function blockRendererTemplate({ blocks }: BlockRendererTemplateProps): string {
  return html`<div data-component="block-renderer">
    ${renderLazyComponentTemplate(componentMap, { components: blocks })}
  </div>`;
}
