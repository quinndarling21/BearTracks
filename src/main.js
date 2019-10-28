
import React, { Component } from 'react';
import HomePage from './pages/HomePage'
import App from './pages/App'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
        this.toPlanner = this.toPlanner.bind(this)
    }

    toPlanner() {
        console.log('called')
        this.setState({
            page: 1
        })
    }
    
    render() {
        return (
            <>
                {this.state.page === 0 && 
                <HomePage
                    toPlanner = {()=>this.toPlanner()}/>}
                {this.state.page === 1 && 
                <App/>}
            </>
            
        )
    }
}

export default Main