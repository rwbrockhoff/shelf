import React from 'react';
import './Product.css';

export default function Product(props){
    return (
        <div key={props.key}>
            <img src={props.imgurl} alt={props.name}/>
            <h1> {props.name} </h1>
            <h3> {props.price} </h3>
            <button onClick={() => {
                props.deleteProduct(props.id)
            }
            }> Delete </button>
        </div>
    )
}