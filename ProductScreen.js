
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Carousel} from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products'

const ProductScreen = ({ props, match }) => {
    const { id } = useParams()
    const product = products.find(p => p._id === parseInt(id))
    return (
        <>
        <ol class="breadcrumb bg-secondary">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="#">{product.Category}</a></li>
            <li class="breadcrumb-item active">{product.Name}</li>
        </ol>
            <Row>
                <Col>
                    <Carousel fade swipeable overscrollable>
                        <Carousel.Item>
                            <div>
                                <Image src={product.Image_URL_1} alt={product.Name} fluid></Image>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image src={product.Image_URL_2} alt={product.Name} fluid></Image>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                {product.Name}
                            </h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3><Rating value = {product.Ratings} color = '#f9cd66' /></h3>
                        </ListGroup.Item>
                        <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Price:
                                    </Col>
                                    <Col>
                                    <strong>&#8377; {product.Price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Status:
                                    </Col>
                                    <Col>
                                    {product.Quantity > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroupItem>
                                <Button  className='btn btn-block btn-success' type='button' disabled={product.Quantity === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                        <ListGroup.Item>
                            <br></br>
                            <p>{product.Description}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
