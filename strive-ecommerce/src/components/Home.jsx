import React, { Component } from "react";
import { Row, Col, Card, Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import { getProducts } from "../fetch/fetches";
class Home extends Component {
  state = {
    selected: false,
    products: []
  };
  async componentDidMount() {
    let products = await getProducts();
    this.setState({ products });
  }
  hideModal = () => {
    this.setState({
      selected: false,
    });
  };

  // componentDidMount = async () => {
  //     let response = fetch("http://localhost:3005/products")
  //     let data = await response.json()
  //     console.log(data)
  // }
  render(props) {
    return (
      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 text-center">
          {this.state.products.map((e) => {
            return (this.state.products ?
                <Card className="col ml-2" style={{ width: "18rem" }}>
                  <Link to={"/details/"+e.id}>
                    <img variant="top" src="holder.js/100px180" />
                  </Link>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      type="button"
                      onClick={() => {
                        this.setState({ selected: true });
                      }}
                    >
                      Add Review{" "}
                    </Button>
                    <ReviewModal
                      show={this.state.selected}
                      hideModal={()=>this.hideModal()}
                      onHide={()=>this.hideModal()}
                      {...props}
                    />
                  </Card.Body>
                </Card>
                :<div>Loading</div>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Home;
