//Source:  https://codeforgeek.com/unit-testing-nodejs-application-using-mocha/

var supertest = require("supertest");
// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe('GET /', function() {
      it('respond with html', function(done) {
         server
         .get('/')
         .expect('Content-Type', /html/)
         .expect(200, done);
      });
});