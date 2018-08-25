import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCode/PromoCode';

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      estimatedTotal: 0,
      disablePromoButton: false,
    }
  }

  // Get total of all items
  componentDidMount = () => {
    this.setState({
      estimatedTotal: this.state.total
    })
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

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr />
          <PromoCodeDiscount 
            giveDiscount={ () => this.giveDiscountHandler() }
            isDisabled={this.state.disablePromoButton}
          />
        </Grid>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(App);
