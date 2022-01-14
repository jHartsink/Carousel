import { defineComponent, refElement } from '@muban/muban';
import { FirstDiv } from '../firstDiv/FirstDiv';
import './firstCarousel.style.scss';

export const FirstCarousel = defineComponent({
  name: 'FirstCarousel',
  components: [FirstDiv],
  refs: {
    firstDiv: refElement('check'),
  },
  setup({ refs }) {
    // eslint-disable-next-line no-console
    const checkers = 'hello Word';
    // eslint-disable-next-line no-console
    console.log(checkers);
    // eslint-disable-next-line no-console
    console.log(refs.firstDiv);
    return [];
  },
});
