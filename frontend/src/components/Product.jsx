import React from 'react'
import {Link} from 'react-router-dom' 
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'
const Product = ({product}) => {
    return (
        <Card  className="my-3 p-3 rounded text-center">
            <Link to={`/products/${product._id}`} >
                <Card.Img src={product.image} style={ {height: '200px', width: "200px"}} variant="top"/>
            </Link>
            <Card.Body>
                 <Link to={`/products/${product._id}`} >
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </Card.Text>
                <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
