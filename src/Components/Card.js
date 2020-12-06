import React ,{Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./Card.css"
class Example extends Component{
  render(){
  return (
    <div className="card">
    {/* <div className="services">
      <h1>{this.props.services}</h1>
      </div> */}
      {/* <div> */}

      <Card>
        <CardImg top width="100%" className="cardimg" src={this.props.src} alt="Card image cap" />
        <CardBody>
          <CardTitle className="main" tag="h2">{this.props.title}</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
          <CardText className="price" tag="h3"> {this.props.price}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
      </div>
      // </div>
    
  );
};
}

export default Example;
