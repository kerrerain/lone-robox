class Oscillator {
  constructor(options) {
    this.options = options.oscillator;
    this.position = 0;
    this.vibrating = false;
    this.timeOfVibration = 0;
  }

  triggerVibration() {
    this.vibrating = true;
    this.timeOfVibration = 0;
  }

  onVibrationEnd(cb) {
    this.vibrationEndCallback = cb;
  }

  run(time) {
    if (this.vibrating) {
      this.timeOfVibration += time;
      this.position = this.computePosition(this.timeOfVibration);
    }

    if (this.timeOfVibration > this.options.timeOfVibrationEnd) {
      this.vibrating = false;
      this.timeOfVibration = 0;
      this.position = 0;

      if (this.vibrationEndCallback) {
        this.vibrationEndCallback();
      }
    }

    return this.position;
  }

  computePosition(t) {
    // Equation of a damped harmonic oscillator
    return Math.exp(-this.options.gamma * t) *
      this.options.amplitude *
      Math.cos(this.options.omega1 * t);
  }
}

export default Oscillator;
