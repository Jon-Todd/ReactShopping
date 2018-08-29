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
      total: 0,
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
      if(this.props.promoCode === 'DISCOUNT') {
        if (this.props.cart === undefined || this.props.cart.length == 0) {
          return 0
        } else {
          setTimeout(function() {
            var items = this.props.cart;
            var i = 0
            var totalPrice = 0
            for (i = 0; i < items.length; i++) {
              var totalPrice = totalPrice + items[i].quantity * items[i].price
            }
    
            totalPrice -= 5 
            
            this.setState({
              estimatedTotal: totalPrice,
              disablePromoButton: true
            });
          }.bind(this), 10);
        
      }
    };
  }
  //get total of items
  getTotalOfItems = () => {

      setTimeout(function() {
        var items = this.props.cart;
        var i = 0
        var totalPrice = 0
        for (i = 0; i < items.length; i++) {
          var totalPrice = totalPrice + items[i].quantity * items[i].price
        }
        
        this.setState({
          estimatedTotal: totalPrice,
          disablePromoButton: false
        });
      }.bind(this), 10);
  }

  render() {
    return (
      <div className="container">
        <Col md={9} className="items">
          <ProductListing 
          products={this.props.initialitems} 
          getTotal={this.getTotalOfItems}
          />
        </Col>
        <Col md={3} className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <hr />
          <EstimatedTotal 
            price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails 
            price={this.state.estimatedTotal.toFixed(2)}
            getPrice={this.getTotalOfItems }
          />
          <hr />
          <PromoCodeDiscount 
            giveDiscount={this.giveDiscountHandler }
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
