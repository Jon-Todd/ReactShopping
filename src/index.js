import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

var ITEMS = [
    {
      name: "Leather Jacket",
      category: "Coats & Jackets",
      price: 54.99,
      stock: 6,
      key: 1,
      src: "https://images-na.ssl-images-amazon.com/images/I/61KrRknNFzL._UY606_.jpg"
    },
    {
      name: "Blue T-shirts",
      category: "T-shirts",
      price: 8,
      stock: 11,
      key: 2,
      src: "https://images-na.ssl-images-amazon.com/images/I/512tqabenvL._UX522_.jpg"
    },
    {
      name: "Black Jeans",
      category: "Jeans",
      price: 32.99,
      stock: 8,
      key: 3,
      src: "https://images-na.ssl-images-amazon.com/images/I/51mEPa7tyVL._UX679_.jpg"
    },
    {
      name: "Brown Shoes",
      category: "Shoes",
      price: 29.99,
      stock: 7,
      key: 4,
      src: "https://images-na.ssl-images-amazon.com/images/I/810QsOI1XNL._UX675_.jpg"
    },
    {
      name: "Blue Jeans",
      category: "Jeans",
      price: 32.99,
      stock: 2,
      key: 5,
      src: "https://images-na.ssl-images-amazon.com/images/I/91OHr5O2q7L._UX569_.jpg"
    },
    {
      name: "Black Shoes",
      category: "Shoes",
      price: 25,
      stock: 10,
      key: 6,
      src: "https://images-na.ssl-images-amazon.com/images/I/81Q8DmUyewL._UX625_.jpg"
    },
    {
      name: "Trainers",
      category: "Shoes",
      price: 38.99,
      stock: 9,
      key: 7,
      src: "https://images-na.ssl-images-amazon.com/images/I/61YmnMupqOL._UX675_.jpg"
    },
    {
      name: "Parka Jacket",
      category: "Coats & Jackets",
      price: 49.99,
      stock: 8,
      key: 8,
      src: "https://images-na.ssl-images-amazon.com/images/I/61ZmuK4li2L._UX466_.jpg"
    },
    {
      name: "Bed Slippers",
      category: "Shoes",
      price: 9.99,
      stock: 20,
      key: 9,
      src: "https://images-na.ssl-images-amazon.com/images/I/61IsQzCDGoL._UY675_.jpg"
    },
    {
      name: "Pink T-shirt",
      category: "T-shirts",
      price: 8,
      stock: 5,
      key: 10,
      src: "https://images-na.ssl-images-amazon.com/images/I/81DI2bvgEBL._UX679_.jpg"
    },
    {
      name: "Yellow T-shirt",
      category: "T-shirts",
      price: 8,
      stock: 6,
      key: 11,
      src: "https://images-na.ssl-images-amazon.com/images/I/51zF77b1KNL._UX522_.jpg"
    },
    {
      name: "Red T-shirt",
      category: "T-shirts",
      price: 8,
      stock: 6,
      key: 12,
      src: "https://images-na.ssl-images-amazon.com/images/I/51GX2Fjs27L._UX522_.jpg"
    },
  ]

ReactDOM.render(
    <Provider store={store}>
        <App initialitems={ITEMS}/>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
