import React, { Component } from 'react';
import { 
    Button, 
    Collapse, 
    Well, 
    Form,
    Row, 
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Tooltip,
    OverlayTrigger
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

class PromoCodeDiscount extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false
        };
    }

    handleChange = e => {
        this.props.handleChange(e);
    }

    render() {
        const tooltip = (
            <Tooltip id="tooltip">
            <strong>DEBUG:</strong> Use DISCOUNT as a voucher code
            </Tooltip>
        );

        return(
            <div>
                <Button
                className="promo-code-button"
                bsStyle="link"
                onClick={() => this.setState({ open: !this.state.open  })}
                >
                {this.state.open === false ? `Apply ` : `Hide `}
                promo code
                {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Row className="show-grid">
                                <Col md={12}>
                                    <Form>
                                        <FormGroup controlId="formInlineName">
                                            <ControlLabel>Promo Code</ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter promo code"
                                                value={this.props.promoCode}
                                                onChange={this.handleChange} 
                                            />
                                        </FormGroup>
                                        <OverlayTrigger placement="bottom" overlay={tooltip}>
                                            <Button
                                                block
                                                bsStyle="success"
                                                className="btn-round"
                                                disabled={this.props.isDisabled}
                                                onClick={this.props.giveDiscount}
                                            >
                                            Apply
                                            </Button>
                                        </OverlayTrigger>
                                    </Form>
                                </Col>
                            </Row>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps,{handleChange})(PromoCodeDiscount);
