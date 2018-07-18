import React, { Component } from 'react';
import './Form.css';
import defaultImg from '../../assets/default.jpg';
import axios from 'axios';

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            price: '',
            imgurl: ''
        }
    }

    addInventoryButton = () => {
        let name = this.state.name
        let price = this.state.price
        let imgurl = this.state.imgurl

         axios.post('/api/product', {name: name, price: price, image_url: imgurl})
         .then( (res) => {
            this.props.passPostToApp(res.data)
           
         })

         this.setState({
             name: '',
             price: '',
             imgurl: ''
         })
    }

    render(){
        return (
           <div>

            <img className='defaultImg' src={defaultImg} alt='default'/>
            
            <p> Image URL: </p>
            <input value={this.state.imgurl} onChange={ (e) => this.setState({imgurl: e.target.value})}/>
            
            <p> Name: </p>
            <input value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})}/>

            <p> Price: </p>
            <input value={this.state.price}onChange={ (e) => this.setState({price: e.target.value})}/>
            
            <br/>

            <button onClick={ () => {
                
                this.setState({
                    name: '',
                    price: "", 
                    imgurl: ''
                    
                })}}> Clear </button>

            <button onClick={this.addInventoryButton}> Add to Inventory </button>
            

           </div>
        )
    }
}