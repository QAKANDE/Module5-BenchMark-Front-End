import React, { Component } from 'react';
import { Modal, Form, Col, Button, FormGroup, FormControl } from 'react-bootstrap'
class ReviewModal extends Component {
    state = {  }
    render() { 
        return (  
            <Modal show={this.props.show} onHide= {()=> this.props.hideModal()}>
            <Modal.Header className="d-flex justify-content-between">
        <Modal.Title>Add Review</Modal.Title>
        <div onClick= {()=> this.props.hideModal()}>
                X
            </div>
        </Modal.Header>
        <Modal.body>
<div>form</div>
        </Modal.body>
        </Modal>
        );
    }
}
 
export default ReviewModal;