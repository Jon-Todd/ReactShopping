import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';
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
                <Button
                className="item-details-button"
                bsStyle="link"
                onClick={() => this.setState({open: !this.state.open})}
                >
                {this.state.open === false ? `See` : `Hide`} item details
                {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <Cart 
                    getPrice={this.props.getPrice}
                    />
                </Collapse>
            </div>
        )
    }
}