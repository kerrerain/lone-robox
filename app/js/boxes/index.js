import dummy from './dummy';
import flat from './flat';
import nyan from './nyan';
import pink from './pink-panther';

const boxes = {
  dummy,
  flat,
  nyan,
  pink,
};

Object.keys(boxes).forEach((key) => {
  boxes[key].id = key;
});

export default boxes;
