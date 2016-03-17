//var app = require('../bin/www');
var request = require('supertest');

var request = request('http://localhost:3000');

describe('api test', function () {
  it('add two numbers', function (done) {
    request.post('/sum')
        .send({firstNum: 1, secondNum: 2})
        .expect('2', done);
  });
});