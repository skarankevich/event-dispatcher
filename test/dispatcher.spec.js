var assert = require('chai').assert;
var Dispatcher = require('../dist/EventDispatcher.js');
var dispatcher;

describe('Dispatcher', function () {
  beforeEach(function () {
    dispatcher = new Dispatcher();
  });

  it('should be an object', function () {
    assert.isObject(dispatcher);
  });

  it('should have no subscriptions by default', function () {
    assert.isDefined(dispatcher.subscriptions);
    assert.isObject(dispatcher.subscriptions);
    assert.strictEqual(Object.keys(dispatcher.subscriptions).length, 0);
  });
});
