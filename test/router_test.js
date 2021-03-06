var assert = require('assert'),
    greatRouter = require('../');

describe('Router', function() {
  it('call routes', function() {
    var router = greatRouter(),
        called = '';

    router.get('/', function() { called += '/' });
    router.get('/users/new', function() { called += 'new' });
    router.get('/users/login', function() { called += 'login' });

    called = ''
    router.handle({ method: 'GET', path: '/' }, {}, function() {});
    assert.equal(called, '/');

    called = ''
    router.handle({ method: 'GET', path: '/users/new' }, {}, function() {});
    assert.equal(called, 'new');

    called = ''
    router.handle({ method: 'GET', path: '/users/login' }, {}, function() {});
    assert.equal(called, 'login');
  });
});