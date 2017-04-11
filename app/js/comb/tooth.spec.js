/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-webpack-loader-syntax: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint global-require: 0 */

import { assert } from 'chai';

describe('Tooth', () => {
  let module;

  beforeEach(() => {
    const ModuleToothInjector = require('inject-loader!./tooth');
    const ModuleToothSkeletonInjector = require('inject-loader!./tooth-skeleton');

    module = ModuleToothInjector({
      'pixi.js': {},
      './tooth-skeleton': ModuleToothSkeletonInjector({
        'pixi.js': {},
      }),
    }).default;
  });

  it('should complain if the image is not set in the options', () => {
    // Arrange
    const options = {
      tooth: {},
    };

    // Act
    const fn = () => {
      module.checkOptions(options);
    };

    // Assert
    assert.throws(fn, 'The image is missing.');
  });
});
