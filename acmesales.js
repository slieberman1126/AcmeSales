function generateCustomerSalesMap(salesData, customerData) {
  const customers = customerData.reduce(function(total, obj) {
    let key = obj['id'];
    total[key] = obj['name'];
    return total;
  }, {});
  return salesData.reduce(function(total, obj) {
    let key = customers[obj['customerId']];
    if (!total[key]) {
      total[key] = 0;
    }
    total[key] += obj['total'];
    return total;
  }, {});
}

module.exports = generateCustomerSalesMap;
