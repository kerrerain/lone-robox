export default {
  comb: {
    teeth: 10,
    teethOffsetXLeft: 0.15,
    teethOffsetXRight: 0.1,
    teethOffsetYTop: 0.2,
    scale: 0.5,
    image: 'assets/images/dummy-head.png',
  },
  tooth: {
    points: 6,
    length: 80,
    displayPoints: false,
    clickable: true,
    image: 'assets/images/dummy-tooth-rotate.png',
  },
  oscillator: {
    gamma: 0.05,
    omega1: 5,
    amplitude: 5,
    timeOfVibrationEnd: 100,
  },
  cylinder: {
    scale: 0.8,
    rotationSpeed: 0.01,
    image: 'assets/images/dummy-cylinder.png',
  },
  pin: {
    image: 'assets/images/dummy-pins-sprite.png',
    frames: 5,
    frameWidth: 20,
    frameHeight: 20,
  },
};
