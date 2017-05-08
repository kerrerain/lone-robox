import _ from 'lodash';
import DEFAULT_OPTIONS from '../default-options';

const customOptions = {
  label: 'Dummy',
  comb: {
    image: 'assets/images/dummy/dummy-head.png',
  },
  tooth: {
    image: 'assets/images/dummy/dummy-tooth-rotate.png',
    imageActive: 'assets/images/dummy/dummy-tooth-rotate-active.png',
  },
  pin: {
    image: 'assets/images/dummy/dummy-pins-sprite2.png',
  },
  cylinder: {
    image: 'assets/images/dummy/dummy-cylinder.png',
  },
};

export default _.merge({}, DEFAULT_OPTIONS, customOptions);
