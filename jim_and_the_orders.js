const orders = [
  [1, 3],
  [2, 3],
  [3, 3],
];

function jimOrders(orders) {
  return orders
    .map(order => order.reduce((prev, cur) => prev + cur))
    .map((serveTime, index) => {
      return { serveTime: serveTime, customer: index + 1 };
    })
    .sort((a, b) => a.serveTime - b.serveTime)
    .map(x => x.customer);
}

jimOrders(orders);
