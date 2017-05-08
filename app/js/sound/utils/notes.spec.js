import { assert } from 'chai';
import notes from './notes';

describe('Notes', () => {
  it('should gather the whole set of notes used in a score, and sort them', () => {
    // Arrange
    const score = [{
      name: 'E4',
    }, {
      name: 'G#5',
    }, {
      name: 'E4',
    }, {
      name: 'G5',
    }, {
      name: 'D3',
    }];

    // Act
    const result = notes(score);

    // Assert
    assert.deepEqual(['D3', 'E4', 'G5', 'G#5'], result);
  });
});
