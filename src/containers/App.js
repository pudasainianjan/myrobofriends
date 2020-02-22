import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';
//cardlist and SearchBox neeeds to send his info to his parent App in order to communicate with SearchBox component 
//in order to communicate React has idea of STATE -->an object that describes our application we re able to change input value and what robots array means

//STATE >> props  here the parent feeds state in to a child component and when child receives a state its property, that child can never change that property , the parent just   tells what the  state is and the child  receives it as robots                  

const mapStateToProps = state => {
    return {    //returns object
        searchField : state.searchRobots.searchField,    //searchField we are going to return which is going to be used as props by App component is going to come from the state.searchRobots.searchfield which again comes from our reducers...
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
        
    }
}

const mapDispatchToProps = (dispatch) => {                //dispatch is what triggers the action and action is abject and dispatch here is used to send action
    return {
/*prop*/    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
            onRequestRobots: () => dispatch(requestRobots())  //request robots needs to have the dispatch method            
                }           

}             


class App extends Component{ 
    
    // //adding state
    // constructor(){
    //     super();    //must call super as it is derived class and this calls the constructor of Component
    //     this.state = {   //i am this i usually live in parent components to pass states to different components
    //         robots: []  //robots array
           
    //     }      
    // }

    componentDidMount(){
        
        this.props.onRequestRobots();
            
      
    }
//in search box we have we have event which use here
// onSearchChange = (event) => {   //give arrow function so that 'this' refers to where it was created for eg below this was created in input and is not referring to 'this' of App              
//     this.setState({searchfield: event.target.value})                                                                      
//     console.log(event.target.value);
    
//     // console.log(filteredRobots);
// }


    render(){
        const { searchField, onSearchChange, robots, isPending } =this.props;
        const filteredRobots = robots.filter(robot =>{                            //this.state.robots is removed because above const is added
            return robot.name.toLowerCase().includes(searchField.toLowerCase());   //this.state.robots is removed because above const is added
        })
        
        return isPending?
             <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='grow f1'>MY ROBO FRIENDS</h1>  {/*h1 is easy so no component for it*/}
                <p className='link dim black i f4'>Anjan Pudasaini</p>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>  
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>    {/*} // whenr robots={this.state.robots} -->now robots is now props so cardlist accepts props */}
                    </ErrorBoundary>
                </Scroll>
             </div>
            
        );  // after return line no: 47-58 ,its ternary statement if else if
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);  /*connect is a higher order function -->function that returns
 another function and its going to run (App)
 connect says--> hey! subscribe to any state changes my dear App, App, you know now when there is redux store and can figure changes
 */