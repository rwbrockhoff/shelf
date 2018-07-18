import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';

export default class Dashboard extends Component {
    
    render(props){

        let arr = this.props.inventory.map( (e) => {
            return <p> 
                <Product
                    imgurl={e.imgurl} name={e.name} price={e.price}
            /> </p>
        })




        return (
            <div>
                {arr}
            </div>
        )
    }
}