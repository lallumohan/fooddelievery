import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Row, Col, Carousel, Card, Button } from "react-bootstrap";
import {
  Div,
  InnerDiv,
  MainImg,
  Logo,
  Search,
  City,
  CardContainer,
  Card2,
  CardImg,
} from "./Styled";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductCard from "./ProductCard";
//import './website.css'
import './frontend.css'

function Website() {
  var filteredProductsList = [
    {
      id: 1,
      title: "Australis-Barramundi-Macadamia-Crusted",
      description: "australian",
      img: "imagesAustralis-Barramundi-Macadamia-Crusted.jpg",
    },
    {
      id: 2,
      title: "coin_sandwich",
      description: "australian",
      img: "imagescoin_sandwich.jpg",
    },
    {
      id: 3,
      title: "fish_place",
      description: "australian",
      img: "images\fish_place.jpg",
    },
    {
      id: 4,
      title: "la-nourriture-des-fast-food-modifie-nos-genes",
      description: "australian",
      img: "imagesla-nourriture-des-fast-food-modifie-nos-genes.jpg",
    },
    {
      id: 5,
      title: "la-nourriture-des-fast-food-modifie-nos-genes",
      description: "australian",
      img: "imagesla-nourriture-des-fast-food-modifie-nos-genes.jpg",
    },
  ];
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="\images\slide1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Chiese Food Pasta</h3>
            <p>
              This recipe for Perfect Chinese Noodles is an example of how you
              make your own delicious, healthy and fresh Chinese meal right in
              your own kitchen.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="\images\slide2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Pizza</h3>
            <p>
              Pizza, dish of Italian origin consisting of a flattened disk of
              bread dough topped with some combination of olive oil, oregano,
              tomato, olives, mozzarella or other cheese, and many other
              ingredients, baked quickly—usually, in a commercial setting, using
              a wood-fired oven heated to a very high temperature—and served hot
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="\images\la-nourriture-des-fast-food-modifie-nos-genes.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Healthy Food</h3>
            <p>
              Healthy foods are those that provide you with the nutrients you
              need to sustain your body's well-being and retain energy. Water,
              carbohydrates, fat, protein, vitamins, and minerals are the key
              nutrients that make up a healthy, balanced diet.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/*
      <Container>
      <Row xs={1} md={2} className="g-4">
          {filteredProductsList.map((product) => {
            return (
              <Col key={product.id}>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
      */}

      <CardContainer className="row justify-content-around pb-2">
        <div className="col-3 ml-2 mt-3 pb-5">
          <Card2 className="card">
            <CardImg
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
              className="card-img-top align-self-center"
              alt="No Minimum Order"
            />
            <div className="card-body" style={{ color: "white" }}>
              <p className="card-title h4 font-weight-bold mt-2">
                No Minimum Order
              </p>
              <p className="card-text">
                Order in for yourself or for the group, with no restrictions on
                order value
              </p>
            </div>
          </Card2>
        </div>
        <div className="col-3 mt-3">
          <Card2 className="card">
            <CardImg
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
              className="card-img-top align-self-center"
              alt="Live Order Tracking"
            />
            <div className="card-body" style={{ color: "white" }}>
              <h5 className="card-title h4 font-weight-bold mt-2">
                Live Order Tracking
              </h5>
              <p className="card-text">
                Know where your order is at all times, from the restaurant to
                your doorstep
              </p>
            </div>
          </Card2>
        </div>
        <div className="col-3 mr-2 mt-3">
          <Card2 className="card">
            <CardImg
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
              className="card-img-top align-self-center"
              alt="Lightning-Fast Delivery"
            />
            <div className="card-body" style={{ color: "white" }}>
              <h5 className="card-title h4 font-weight-bold mt-2 align-self-center">
                Lightning-Fast Delivery
              </h5>
              <p className="card-text align-self-center">
                Experience Swiggy's superfast delivery for food delivered fresh
                & on time
              </p>
            </div>
          </Card2>
        </div>
      </CardContainer>

      <Container>
        <Row xs={1} md={4} className="g-4 mt-3" id="dishes">
          {Array.from({ length: 8}).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="\images\la-nourriture-des-fast-food-modifie-nos-genes.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>

                  <div class="d-flex justify-content-between">
                    <div>
                      <p class="price">
                        $79.<span class="sm-text">50</span>
                      </p>
                    </div>
                    <div>
                      <div class="stars">
                        {" "}
                        <span class="fa fa-star star-active"></span>{" "}
                        <span class="fa fa-star star-active"></span>{" "}
                        <span class="fa fa-star star-active"></span>{" "}
                        <span class="fa fa-star-o"></span>{" "}
                        <span class="fa fa-star-o"></span>{" "}
                      </div>
                    </div>
                  </div>

                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

     <div class="flex-row mt-3">
        <div class="search-box">
          <input type="text" placeholder="enter the location" class="search-input"/>
         

        </div>
           <button class="search-btn">Find food</button>



     </div>



    </div>
  );
}

export default Website;
