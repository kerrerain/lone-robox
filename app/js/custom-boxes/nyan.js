import _ from 'lodash';
import DEFAULT_OPTIONS from '../default-options';

const customOptions = {
  label: 'Nyancat',
  comb: {
    teethOffsetXLeft: 0.15,
    teethOffsetXRight: 0.2,
    teethOffsetYTop: -0.4,
    scale: 0.5,
    image: 'assets/images/nyan/nyan-head.png',
  },
  tooth: {
    image: 'assets/images/nyan/nyan-tooth-metal.png',
    imageActive: 'assets/images/nyan/nyan-tooth-active.png',
  },
  pin: {
    image: 'assets/images/nyan/nyan-pins-sprite.png',
  },
  cylinder: {
    image: 'assets/images/nyan/nyan-cylinder.png',
  },
};

export default _.merge({}, DEFAULT_OPTIONS, customOptions);
