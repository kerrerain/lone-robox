import _ from 'lodash';
import DEFAULT_OPTIONS from '../default-options';

const customOptions = {
  comb: {
    teethOffsetXLeft: 0.15,
    teethOffsetXRight: 0.2,
    teethOffsetYTop: -0.4,
    scale: 0.5,
    image: 'assets/images/pink-panther/pinkpanther-head.png',
  },
  tooth: {
    image: 'assets/images/pink-panther/pinkpanther-tooth-metal.png',
    imageActive: 'assets/images/pink-panther/pinkpanther-tooth-active.png',
  },
  pin: {
    image: 'assets/images/pink-panther/pinkpanther-pins-sprite.png',
  },
  cylinder: {
    image: 'assets/images/pink-panther/pinkpanther-cylinder.png',
  },
};

export default _.merge(DEFAULT_OPTIONS, customOptions);
