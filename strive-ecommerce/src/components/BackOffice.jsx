import React, { Component } from 'react';
import { Form,Row,Col, Button, FormGroup, FormControl , Container} from 'react-bootstrap'
import {postProducts} from '../fetch/fetches'
class BackOffice extends Component {
    state = { 
        products:{
            name:"",
            description:"",
            brand:"",
            imageURL:"",
            price:"",
            category:""
        }   
     }
    
     updateProducts = (event) => {
        let products = this.state.products;
        let id = event.currentTarget.id;
        products[id] = event.currentTarget.value;
        this.setState({
            products
        })
     }
    render() { 
        return (
            <Container>
                <Row><Col className="col-6 offset-3">
            <Form onSubmit={this.postProduct}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Name"
                    id="name"
                    value={this.state.products.name}
                    onChange={(e) =>this.updateProducts(e)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control 
                    placeholder="Product description" 
                    type="text"
                       id="description"
                       value={this.state.products.description}
                       onChange={(e) =>this.updateProducts(e)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="brand">Brand</Form.Label>
                    <Form.Control 
                    placeholder="Product Brand" 
                    type="text"
                       id="brand"
                       value={this.state.products.brand}
                       onChange={(e) =>this.updateProducts(e)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="price">Price</Form.Label>
                    <Form.Control 
                    placeholder="Product Price"
                    id="price"
                    type="number"
                    value={this.state.products.price}
                    onChange={(e) =>this.updateProducts(e)}/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="category">Category</Form.Label>
                    <Form.Control 
                    placeholder="Product Category" 
                    id="category"
                    type="text"
                    value={this.state.products.category}
                    onChange={(e) =>this.updateProducts(e)}/>
                </Form.Group>
            </Form.Row>
            <Button  onClick={()=>postProducts(this.state.products)}style={{ backgroundColor:"#0073B1" }} type="submit">
            Post new product
        </Button>
        </Form> 
        </Col></Row>
            </Container>
          );
    }
}
 
export default BackOffice;