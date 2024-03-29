import React, {Component} from 'react';
import CardList from '../component/CardList';
//import {robots} from './robots';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';

class  App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        //console.log('construtor');
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
        //console.log('componentDidMount');
    }
    

    onSearchChange=(event) => {
        this.setState({searchfield: event.target.value})
       
       


    }
    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1>Loading </h1>
        } else {
            return (
                <div className= 'tc'>
                 <h1 className= 'f1'>RoboFriends</h1>
                 <SearchBox searchChange= {this.onSearchChange} />
                 <Scroll>
                 <CardList robots = {filterRobots} />
                 </Scroll>
                
                </div>
            );
            

        }
        //console.log('render');
        
    }
    
}

export default App;
