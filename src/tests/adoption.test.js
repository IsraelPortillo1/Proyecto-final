import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Adoption Router', () => {
  it('GET /api/mocks/mockingusers debe retornar 50 usuarios', async () => {
    const res = await chai.request(app).get('/api/mocks/mockingusers');
    expect(res).to.have.status(200);
    expect(res.body.payload).to.have.lengthOf(50);
  });
});