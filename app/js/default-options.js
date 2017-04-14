export default {
  comb: {
    teeth: 10,
    teethOffsetXLeft: 0.15,
    teethOffsetXRight: 0.1,
    teethOffsetYTop: -0.3,
    scale: 0.5,
    image: 'assets/images/dummy-head.png',
  },
  tooth: {
    points: 4,
    scale: 0.4,
    displayPoints: false,
    clickable: true,
    vibrationDecay: 600,
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
    offsetYTop: 0,
    rotationSpeed: 0.01,
    image: 'assets/images/dummy-cylinder.png',
  },
  pin: {
    image: 'assets/images/dummy-pins-sprite2.png',
    frames: 3,
    frameWidth: 20,
    frameHeight: 20,
  },
};
