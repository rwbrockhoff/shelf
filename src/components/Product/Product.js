import React from 'react';
import './Product.css';

export default function Product(props){
    return (
        <div>
            <img src={props.imgurl} alt={props.name}/>
            <h1> {props.name} </h1>
            <h3> {props.price} </h3>
        </div>
    )
}