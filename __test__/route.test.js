process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let controller = require('../controller/function.controller');
let should = chai.should();
var assert = require('assert');
var expect = require('chai').expect;

chai.use(chaiHttp);

 /*
  * Test  route
  */

describe('/POST isBusinessDay', () => {
  it('it should not POST a request without pages field', (done) => {
    let data = {
        Date: new Date()
    }
    chai.request(server)
        .post('/api/v1/businessDates/isBusinessDay')
        .send(data)
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
    });
});
