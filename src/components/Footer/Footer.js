import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class FooterBottom extends Component {
    render() {
        return(
            <Col className="footer" md={12}>
                <p>Copyright Jonathan Todd 2018</p>
            </Col>
        )
    }
}