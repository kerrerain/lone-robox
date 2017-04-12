import { assert } from 'chai';
import PinFrame from './pin-frame';

describe('PinFrame', () => {
  describe('currentFrameIndex', () => {
    it('should give the right frame', () => {
      // Arrange
      const frames = 5;
      const angle = ((Math.PI / frames) * 2) - (Math.PI / 10);

      // Act
      const result = PinFrame.currentFrameIndex(angle, frames);

      // Assert
      assert.equal(1, result);
    });

    it('should give the last frame anyway if the angle is greater than PI', () => {
      // Arrange
      const frames = 5;
      const angle = (Math.PI / frames) * (frames + 1);

      // Act
      const result = PinFrame.currentFrameIndex(angle, frames);

      // Assert
      assert.equal(frames - 1, result);
    });
  });

  /*  describe('frameAngleTable', () => {
      it('should create a frame angle table', () => {
        // Arrange
        const frames = 2;
        const maxAngle = Math.PI;

        // Act
        const result = PinFrame.frameAngleTable(frames, maxAngle);

        // Assert
        assert.deepEqual([Math.PI / frames, (Math.PI / frames) * 2], result);
      });
    }); */
});
