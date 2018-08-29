import React from 'react'
import { Button } from 'react-bootstrap';

export default function RemoveButton(props) {
    return <Button
        block
        bsStyle="warning"
        className="btn-round"
        onClick={() => {props.removeFromCart(props.cartItem); props.getTotal()}}
        >
        Remove
    </Button>
}