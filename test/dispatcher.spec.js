var assert = require('chai').assert;

import dispatcher from '../src/dispatcher.js';

describe('Dispatcher', function () {
  it('should be an object', function () {
    assert.isObject(dispatcher);
  });

  it('should have no subscriptions by default', function () {
    assert.isDefined(dispatcher.subscriptions);
    assert.isObject(dispatcher.subscriptions);
    assert.strictEqual(Object.keys(dispatcher.subscriptions).length, 0);
  });
});
