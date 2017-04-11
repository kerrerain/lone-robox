import { assert } from 'chai';
import notes from './notes';

describe('Notes', () => {
  it('should gather the whole set of notes used in a score, and sort them', () => {
    // Arrange
    const score = [{
      n: 'E4',
    }, {
      n: 'G#5',
    }, {
      n: 'E4',
    }, {
      n: 'G5',
    }, {
      n: 'D3',
    }];

    // Act
    const result = notes(score);

    // Assert
    assert.deepEqual(['D3', 'E4', 'G5', 'G#5'], result);
  });
});
