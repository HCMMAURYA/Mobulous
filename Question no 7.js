let data = [
  {
    price: 20,
    quantity: 25,
    option: "yes",
  },
  {
    price: 12,
    quantity: 25,
    option: "yes",
  },
  {
    price: 20,
    quantity: 25,
    option: "yes",
  },
  {
    price: 15,
    quantity: 25,
    option: "yes",
  },
  {
    price: 15,
    quantity: 5,
    option: "yes",
  },
];

let aggregatedData = {};

data.forEach((item) => {
  const key = `${item.price}-${item.option}`;
  if (aggregatedData[key]) {
    aggregatedData[key].quantity += item.quantity;
  } else {
    aggregatedData[key] = {
      price: item.price,
      quantity: item.quantity,
      option: item.option,
    };
  }
});

const result = Object.values(aggregatedData);

console.log(result);
