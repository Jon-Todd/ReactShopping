import React from 'react'
import Item from '../Items/Items'
import { connect } from 'react-redux'
import { cartItemsWithQuantities } from '../features/cart/index';

function ProductListing(props) {
  return <div className='product-listing'>
    {
      props.products.map( product =>
        <Item
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter( cartItem => cartItem.key === product.key)[0]}
          key={product.key}
        />)
    }
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)



// import React, { Component } from 'react';
// import { Col, Media, Well, Row, Button } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import Item from './Items';
// import { cartItemsWithQuantities } from '../features/cart/index'

// class ItemIndex extends Component {
    
//     render() {
//         return( 
//         <div>
//             {this.props.initialitems.map(function(item, index) {
//                 return (
//                 <Item
//                     addToCart={ () => this.addToCartHandler(index) }
//                     name={item.name}
//                     category={item.category}
//                     price={item.price}
//                     stock={item.stock}
//                     src={item.src}
//                     key={item.key}
//                     cart={cartItemsWithQuantities(this.props.cartItems)}
                    
//                 />
//                 )
//             }.bind(this))}
//         </div>
//         )
//     }
// }

// export default ItemIndex