import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.deleteProduct = this.deleteProduct.bind(this);

    }
    
    deleteProduct(id){
        axios.delete(`/api/product/${id}`)
        .then( (res) => {
            this.props.passPostToApp(res.data)
        })
    }




    render(props){

        let arr = this.props.inventory.map( (e, i) => {
            
            return <div key={i}> 
                <Product
                     imgurl={e.image_url} name={e.name} price={e.price} id={e.product_id}
                     deleteProduct={this.deleteProduct}
            /> </div>
        })

        return (
            <div>
                {arr}
            </div>
        )
    }
}