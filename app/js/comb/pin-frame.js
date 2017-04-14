class PinFrame {
  static currentFrameIndex(angle, frames) {
    return Math.min(frames - 1, Math.floor(angle / (Math.PI / frames)));
  }
}

export default PinFrame;
