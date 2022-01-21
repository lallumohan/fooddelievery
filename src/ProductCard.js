import React from "react";
import { Card,Button } from "react-bootstrap";

export default function ProductCard({product})
 {
  return (
    <div>
     

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img}  />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          {product.description}
          </Card.Text>
          <p class="price">$79.<span class="sm-text">50</span></p>
                    <div class="stars"> <span class="fa fa-star star-active"></span> <span class="fa fa-star star-active"></span> <span class="fa fa-star star-active"></span> <span class="fa fa-star-o"></span> <span class="fa fa-star-o"></span> </div>
          <Button variant="primary">Go somewhere </Button>
        </Card.Body>
      </Card>

      
    </div>
  );
}
