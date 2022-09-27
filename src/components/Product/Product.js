import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props.product)
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <p className='productName'> {name} </p>
            <p > Price:$ {price}</p>
            <p> Ratings: {ratings}</p>
            <p> Seller: {seller}</p>
        </div>
    );
};

export default Product;