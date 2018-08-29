import React from 'react'
import { connect } from  'react-redux'
import { Button, Well, Media } from 'react-bootstrap';


function sort(items) {
    return items.sort((a, b) => a.key < b.key)
}

function Cart(props) {
    return <div>
        {
            sort(props.cart).map(item =>
                <Well bsSize="small" key={item.key}>
                    <Media>
                        <Media.Left>
                            <img
                                width={64} height={64} src={item.src} alt="Item description"
                            />
                        </Media.Left>
                        <Media.Body>
                            <Button bsStyle="link" className={'removeAll'} onClick={(e) => {props.removeAllFromCart(item); props.getPrice()}}>✖</Button>
                            <p>{ item.name }</p>
                            <p>Qty: { item.quantity }</p>
                            <Button bsStyle="success" onClick={ () => {props.addToCart(item); props.getPrice()} }>+</Button>
                            <Button bsStyle="warning" onClick={ () => {props.removeFromCart(item); props.getPrice()} }>-</Button>
                        </Media.Body>
                    </Media>
                </Well>
            )
        }
    </div>

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