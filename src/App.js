import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
    this.passPostToApp = this.passPostToApp.bind(this);
    
  }

  componentDidMount(){
    axios.get('/api/inventory').then( (res) => {
      this.setState({
        inventory: res.data
      })
    })
  }

  passPostToApp(newInventory){
    this.setState({
      inventory: newInventory
    })
  }


  render() {
    return (
      <div className="App">
        <Dashboard 
            inventory={this.state.inventory}
              passPostToApp={this.passPostToApp}/>

        <Form 
            passPostToApp={this.passPostToApp}/>
            
        <Header />
      </div>
    );
  }
}

export default App;
