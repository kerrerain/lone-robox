import _ from 'lodash';
import DEFAULT_OPTIONS from '../default-options';

const customOptions = {
  comb: {
    teethOffsetXLeft: 0.15,
    teethOffsetXRight: 0.2,
    teethOffsetYTop: -0.4,
    scale: 0.5,
    image: 'assets/images/flat/flat-head.png',
  },
  tooth: {
    image: 'assets/images/flat/flat-tooth.png',
    imageActive: 'assets/images/flat/flat-tooth-active.png',
  },
  pin: {
    image: 'assets/images/flat/flat-pins-sprite.png',
  },
  cylinder: {
    image: 'assets/images/flat/flat-cylinder.png',
  },
};

export default _.merge(DEFAULT_OPTIONS, customOptions);
