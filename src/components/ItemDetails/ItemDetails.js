import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import Cart from '../features/cart'

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return(
            <div>
                <h1 className="mt-0">Cart</h1>
                <Collapse in={this.state.open}>
                    <Cart 
                    getPrice={this.props.getPrice}
                    />
                </Collapse>
            </div>
        )
    }
}