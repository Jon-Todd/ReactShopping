import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemIndex from './components/Items/itemsIndex';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCode/PromoCode';
import { cartItemsWithQuantity } from './components/features/cart/index';
import ProductListing from './components/Items/itemsIndex'

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      estimatedTotal: 0,
      disablePromoButton: false,
      cartItems: []
    }
  }

  // Get total of all items
  componentDidMount = () => {
    this.setState({
      estimatedTotal: this.state.total
    })
  }

  getInitialState = () => {
    console.log(this.props.initialitems)
    return {
      items: this.props.initialitems,
    };
    
  }

  giveDiscountHandler = () => {
    console.log('PromoCode:', this.state.promoCode)
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
      {
        estimatedTotal: this.state.estimatedTotal - 5
      },
      function() {
        this.setState({
          disablePromoButton: true
        });
      });
    }
  };

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal - 5,
      },
    function() {
      this.setState({
        disablePromoButton: true
      });
    })
    }
  };

  checkPrice = (price) => {
    return this.props.price
  }

  //get total of items
  getTotalOfItems = () => {
  
    if (this.props.cart === undefined || this.props.cart.length == 0) {
        return 0
    } else {
      
      const items = this.props.cart
      console.log('items:', items)
      var itemPrices = items.map(function (item) {
        console.log(item.price)
        return items.price
      });

      var totalPrice = items.reduce(function (accumulator, item) {
        return accumulator + item.price;
      }, 0);
      

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      // console.log('cart',this.props.cart[0].price)
      // //filter prices into array
      // const prices = this.props.cart.filter(checkPrice);
  
      return totalPrice
      };
  }

  // .toFixed(2)

  render() {
    return (
      <div className="container">
        <Col md={9} className="items">
          {/* <ItemIndex initialitems={this.props.initialitems} cartItems={this.props.cart}/> */}
          <ProductListing products={this.props.initialitems} />
        </Col>
        <Col md={3} className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.getTotalOfItems()} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr />
          <PromoCodeDiscount 
            giveDiscount={ () => this.giveDiscountHandler() }
            isDisabled={this.state.disablePromoButton}
          />
        </Col>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value,
  cart: state.cart
})

export default connect(mapStateToProps, { handleChange })(App);
