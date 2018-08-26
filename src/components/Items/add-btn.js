import React from 'react'
import { Button } from 'react-bootstrap';

export default function AddButton(props) {
    return <Button
        block
        bsStyle="success"
        className="btn-round"
        onClick={() => props.addToCart(props.product)}
        >
        Add To Cart ({
        (props.cartItem && props.cartItem.quantity) || 0
        })
    </Button>
}