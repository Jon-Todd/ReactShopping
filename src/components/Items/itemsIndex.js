import React from 'react'
import Item from '../Items/Items'
import { connect } from 'react-redux'

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
            getTotal={props.getTotal}
            onClick={props.getTotal}
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