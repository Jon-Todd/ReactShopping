import React from 'react'
import { Button } from 'react-bootstrap';

export default function RemoveButton(props) {
    return <Button
        block
        bsStyle="success"
        className="btn-round"
        onClick={() => props.removeFromCart(props.cartItem)}
        >
        Remove From Cart
    </Button>
}