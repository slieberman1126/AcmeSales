const expect = require('chai').expect;
const generateCustomerSalesMap = require('../acmesales');

const sales = [
  {
    customerId: 1,
    orderId: 1,
    total: 3,
  },
  {
    customerId: 2,
    orderId: 10,
    total: 4,
  },
  {
    customerId: 3,
    orderId: 3,
    total: 6,
  },
  {
    customerId: 2,
    orderId: 4,
    total: 4,
  },
];

const customers = [
  {
    id: 1,
    name: 'Larry',
  },
  {
    id: 2,
    name: 'Moe',
  },
  {
    id: 3,
    name: 'Curly',
  },
];

describe('generateCustomerSalesMap', () => {
  it('exists', () => {
    expect(generateCustomerSalesMap).to.be.ok;
  });
  it('returns an object', () => {
    expect(generateCustomerSalesMap(sales, customers)).to.be.a('object');
  });
  it('returns a combined object', () => {
    expect(generateCustomerSalesMap(sales, customers)).to.eql({
      Larry: 3,
      Moe: 8,
      Curly: 6,
    });
  });
});
