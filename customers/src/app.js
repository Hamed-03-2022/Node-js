const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
mongoose.set('strichtQuery', false)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const customers = [
  {
    "name": "new customer",
    "industry": "technology"
  },
  {
    "name": "new customer",
    "industry": "technology"
  },
  {
    "name": "new customer",
    "industry": "technology"
  },
  {
    "name": "new customer",
    "industry": "technology"
  },
  {
    "name": "new customer",
    "industry": "technology"
  }
];

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.post('/api/customers', (req, res) => {
  res.send({ "customers": customers });
});

app.post('/api/customers', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

const json = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "created_at": "2024-01-01T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "created_at": "2024-02-15T15:30:00Z"
    }
  ],
  "products": [
    {
      "id": 101,
      "name": "Wireless Mouse",
      "description": "Ergonomic wireless mouse",
      "price": 25.99,
      "stock": 150,
      "category": "Electronics",
      "created_at": "2024-03-10T12:00:00Z"
    },
    {
      "id": 102,
      "name": "Bluetooth Headphones",
      "description": "Noise-cancelling over-ear headphones",
      "price": 89.99,
      "stock": 75,
      "category": "Electronics",
      "created_at": "2024-03-15T09:00:00Z"
    }
  ],
  "orders": [
    {
      "order_id": 1001,
      "user_id": 1,
      "product_id": 101,
      "quantity": 2,
      "total_price": 51.98,
      "order_date": "2024-04-01T10:15:00Z",
      "status": "Shipped"
    },
    {
      "order_id": 1002,
      "user_id": 2,
      "product_id": 102,
      "quantity": 1,
      "total_price": 89.99,
      "order_date": "2024-04-03T11:00:00Z",
      "status": "Processing"
    }
  ]
};

app.get('/data', (req, res) => {
  res.json(json);
});

const start = async() => {
try {
  await mongoose.connect('mongodb+srv://Caleb:notepass')
}

}

app.post('/', (req, res) => {
  res.send('Hello Hamed');
});

app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});
