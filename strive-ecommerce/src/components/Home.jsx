import React, { Component } from 'react';
import {Row,Col,Card,Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ReviewModal from './ReviewModal'
class Home extends Component {
    state = { 
        selected:false
     }
     hideModal = () => {
        this.setState({
            selected: false
        })
    }

    // componentDidMount = async () => {
    //     let response = fetch("http://localhost:3005/products")
    //     let data = await response.json()
    //     console.log(data)
    // }
    render(props) { 
        return ( 
           <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 text-center">
                <Card className="col" style={{ width: '18rem' }}>
  <Link to={"/details/"}>
  <img variant="top" src="holder.js/100px180" />
  </Link>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <button type="button" onClick={() => {
                            this.setState({ selected: true })
                        }}>Add Review </button>
    <ReviewModal show={this.state.selected}
                        hideModal={this.hideModal}
                        onHide={this.hideModal}
                        {...props}
        />
  </Card.Body>
</Card>
               </Row>
           </Container>
         );
    }
}
 
export default Home;