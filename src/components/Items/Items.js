import React, { Component } from 'react';
import { Col, Media, Well, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
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
                                    <AddBtn  
                                        cartItem={props.cartItem} 
                                        product={props.product}
                                        addToCart={props.addToCart}
                                    />
                                    {
                                        props.cartItem
                                        ? <RemoveBtn  
                                        cartItem={props.cartItem} 
                                        product={props.product}
                                        removeFromCart={props.removeFromCart}
                                    />
                                    : null
                                    }
                                    
                                </Col>
                            </Row>
                        </Media.Body>
                    </Media>
                </Well>
            </Col>
        )
}

// const mapStateToProps = state => ({
//     cart: state.item
// });

// function mapDispatchToProps(dispatch) {
//     return {
//         addToCart: (item) => {
//             console.log(item);
//             dispatch({ type: 'ADD', payload: item })
//         },
//         removeFromCart: (item) => {
//             dispatch({ type: 'REMOVE', payload: item })
//         }
//     }
// }

// export default connect (mapStateToProps, mapDispatchToProps)(Item)
