import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { render } from '@testing-library/react';
//cardlist and SearchBox neeeds to send his info to his parent App in order to communicate with SearchBox component 
//in order to communicate React has idea of STATE -->an object that describes our application we re able to change input value and what robots array means

//STATE >> props  here the parent feeds state in to a child component and when child receives a state its property, that child can never change that property , the parent just   tells what the  state is and the child  receives it as robots                  



class App extends Component{ 
    
    //adding state
    constructor(){
        super();    //must call super as it is derived class and this calls the constructor of Component
        this.state = {   //i am this i usually live in parent components to pass states to different components
            robots: [],  //robots array
            searchfield: ''
        }      
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users =>this.setState({robots:users}));  //here state is updated so render runs again
            
      
    }
//in search box we have we have event which use here
onSearchChange = (event) => {   //give arrow function so that 'this' refers to where it was created for eg below this was created in input and is not referring to 'this' of App              
    this.setState({searchfield: event.target.value})                                                                      
    console.log(event.target.value);
    
    // console.log(filteredRobots);
}


    render(){
        const { robots , searchfield} =this.state;
        const filteredRobots = robots.filter(robot =>{                            //this.state.robots is removed because above const is added
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());   //this.state.robots is removed because above const is added
        })
        
        return !robots.length?     //this.state.robots is removed because above const is added
             <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='grow f1'>MY ROBO FRIENDS</h1>  {/*h1 is easy so no component for it*/}
                <p className='link dim black i f4'>Anjan Pudasaini</p>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>  
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>    {/*} // whenr robots={this.state.robots} -->now robots is now props so cardlist accepts props */}
                    </ErrorBoundary>
                </Scroll>
             </div>
            
        );  // after return line no: 47-58 ,its ternary statement if else if
        
    }
    
}

export default App;