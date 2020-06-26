import React, { Component } from "react";
import {
  Modal,
  Form,
  Col,
  Button,
  FormGroup,
  FormControl,
} from "react-bootstrap";
class ReviewModal extends Component {
  state = {};
  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>????</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ReviewModal;
