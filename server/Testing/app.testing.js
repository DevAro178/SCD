const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const app = require('../controllers/crudController'); // Replace with the actual file path
const Crud = require('../models/crudModel');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Buses Controller Tests', function() {
    this.timeout(5000)
before(async () => {
    console.log('Connecting to the test database...');
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/testDB', { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to the test database');
    } catch (error) {
      console.error('Error connecting to the test database:', error);
    }
  });
  after(async () => {
    // Disconnect from the test database or perform any necessary teardown
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    // Clear the test database or perform any necessary setup before each test
    await Crud.deleteMany({});
  });

  afterEach(async () => {
    // Clear the test database or perform any necessary teardown after each test
    await Crud.deleteMany({});
  });

  it('should get all Buses records', async () => {
    // Create some test Buses records
    await Crud.create([
      { companyName: 'Company 1', phone: '123-456-7890', email: 'company1@example.com', location: 'Location 1', description: 'Description 1' },
      { companyName: 'Company 2', phone: '987-654-3210', email: 'company2@example.com', location: 'Location 2', description: 'Description 2' },
    ]);

    const res = await chai
      .request(app)
      .get('/api/crud');

    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.lengthOf(2); // Assuming you created two test records
  });

  it('should create a new Buses record', async () => {
    const newCrudData = {
      companyName: 'New Company',
      phone: '555-555-5555',
      email: 'newcompany@example.com',
      location: 'New Location',
      description: 'New Description',
    };

    const res = await chai
      .request(app)
      .post('/api/crud')
      .send(newCrudData);

    expect(res).to.have.status(200);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('companyName').equal(newCrudData.companyName);
  });

  it('should get a particular Bus record by ID', async () => {
    // Create a test Buses record
    const newCrud = await Crud.create({
      companyName: 'Test Company',
      phone: '111-111-1111',
      email: 'testcompany@example.com',
      location: 'Test Location',
      description: 'Test Description',
    });

    const res = await chai
      .request(app)
      .get(`/api/crud/${newCrud._id}`);

    expect(res).to.have.status(200);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('companyName').equal(newCrud.companyName);
  });
})  