import React, { Component } from 'react';
import {Row,Col,Button,Container} from 'react-bootstrap'
class Details extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
            <Row>
                <Col>
                <div className="d-flex flex-row">
              <div>
                 <h5>Product image placeholder</h5>
              </div>
              <div className="mx-4">
                 <h5>Product details placeholder</h5>
              </div>
                </div>
                </Col>
            </Row>
            <div className="d-flex flex-row justify-content-center">
            <Button  className = "mx-2" style={{ backgroundColor:"green" }} >
          Edit Product
        </Button>
        <Button  style={{ backgroundColor:"red" }}>
           Delete Product
        </Button>
            </div>
            </Container>
         );
    }
}
 
export default Details;