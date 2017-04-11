import { assert } from 'chai';
import Sequencer from './index';

const notes = [{
  position: 12,
  time: 0,
}, {
  position: 0,
  time: 4,
}, {
  position: 4,
  time: 6,
}, {
  position: 4,
  time: 8,
}, {
  position: 2,
  time: 14,
}, {
  position: 6,
  time: 14,
}];

describe('Sequencer', () => {
  let sequencer;

  beforeEach(() => {
    sequencer = new Sequencer();
    sequencer.load(notes);
  });

  describe('#load(notes)', () => {
    it('should init the score', () => {
      // Arrange
      // Act
      sequencer.load(notes);

      // Assert
      assert.isDefined(sequencer.score);
    });
  });
});
