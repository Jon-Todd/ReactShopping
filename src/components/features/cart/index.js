import React from 'react'
import { connect } from  'react-redux'

function sort(items) {
    return items.sort((a, b) => a.key < b.key)
}

function Cart(props) {
    return <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                sort(props.cart).map(item => <tr>
                    <td> { item.name }</td>
                    <td> { item.quantity }</td>
                    <td>
                        <button onClick={ () => {props.addToCart(item); props.getPrice()} }>+</button>
                        <button onClick={ () => {props.removeFromCart(item); props.getPrice()} }>-</button>
                    </td>
                    <td>
                        <button
                            onClick={(e) => {props.removeAllFromCart(item); props.getPrice()}}
                        >
                            Remove all from cart
                        </button>
                    </td>
                </tr>)
            }
        </tbody>
    </table>
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)