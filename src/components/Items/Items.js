import React from 'react';
import { Col, Media, Well, Row } from 'react-bootstrap';
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'



export default function ProductListItem(props) {
        return(
            <Col className="item-grid">
                <Well>
                    <Media>
                        <Media.Heading>
                            <img
                                height={200}
                                width={200}
                                alt="thumbnail"
                                src={props.product.src} 
                            />
                        </Media.Heading>
                        <Media.Body>
                            <p>{props.name}</p>
                            <Row className="show-grid">
                                <Col md={12}>
                                    <strong> {`£${props.product.price}`} </strong>
                                    <br />
                                    Qty: {props.product.stock}
                                    <div className="itemButtons">
                                        <AddBtn  
                                            product={props.product}
                                            addToCart={props.addToCart}
                                            getTotal={props.getTotal}
                                            onClick={() => {this.props.getTotal}}
                                            cart={props.cartItem}
                                        />
                                        {
                                            props.cartItem
                                            ? <RemoveBtn  
                                            cartItem={props.cartItem} 
                                            product={props.product}
                                            getTotal={props.getTotal}
                                            removeFromCart={props.removeFromCart}
                                        />
                                    : null
                                    }
                                </div>
                                </Col>
                            </Row>
                        </Media.Body>
                    </Media>
                </Well>
            </Col>
        )
}