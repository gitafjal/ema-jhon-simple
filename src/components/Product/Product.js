import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props.product)
    const { name, img, seller, price, ratings, category } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <p className='productName'> {name} </p>
            <p> Category: {category}</p>
            <p > Price:$ {price}</p>
            <p> Ratings: {ratings}</p>
            <p> Seller: {seller}</p>
        </div>
    );
};

export default Product;