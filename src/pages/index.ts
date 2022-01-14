import type { AppTemplateProps } from '../App.template';
import { FirstCarouselMock } from '@/components/HTML/FirstCarousel.mock';

export const data = (): AppTemplateProps => ({
  layout: {
    name: 'default-layout',
    props: {
      blocks: [
        {
          name: 'firstCarousel',
          props: FirstCarouselMock,
        },
      ],
    },
  },
});

// https://github.com/nfl/react-helmet
export const meta = (): Record<string, string> => ({
  title: 'foo',
  description: 'bar',
});
