import React from "react";

const productData = [
    {
        id: 1,
        name: "AB-Blue",
        image: "src/app/assets/img/ab-blue.jpg",
        price: "7.50",
        rating: null,
        quantity: "1"
    },

    {
        id:2,
        name: "Freedom Red",
        image: "src/app/assets/img/freedom-red.jpg",
        price: "7.50",
        rating: null,
        quantity: "1"
    },

    {   id: 3,
        name: "Justic Blue",
        image: "src/app/assets/img/justice-blue.jpg",
        price: "7.50",
        rating: null,
        quantity: "1"
    },

    {
        id: 4,
        name: "AB-Pink",
        image: "src/app/assets/img/ab-pink.jpg",
        price: "7.50",
        rating: null,
        quantity: "1"
    },

    {
        id: 5,
        name: "Light Blue",
        image: "src/app/assets/img/Light Blue.png",
        price: "7.50",
        rating: null,
        quantity: "1"
    },

    {
        id: 6,
        name: "Blue",
        image: "src/app/assets/img/Blue.png",
        price: "7.50",
        rating: null,
        quantity: "1"
    },
]

const solidProducts = () => {
    return (
        <div className='solid-products-container'>
            {productData.map((product, index) => (
                <Card key={index} product={product} />
            ))}
        </div>

    );
};

const Card = ({ product }) => {
    return (
    <div className="card">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <p className="card-text">{product.rating}</p>
        <p className="card-text">{product.quantity}</p>
        </div>
    </div>
    );
};

export default solidProducts;