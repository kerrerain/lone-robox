class PinFrame {
  static currentFrameIndex(angle, frames) {
    return Math.min(frames - 1, Math.floor(angle / (Math.PI / frames)));
  }

  static currentFrameTableIndex(angle, table) {
    let frame = 0;

    table.forEach((value, index) => {
      if (angle >= value) {
        frame = index + 1;
      }
    });

    return frame;
  }
}

export default PinFrame;
