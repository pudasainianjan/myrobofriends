import React , { Component } from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(){     //one of react life cycle method ---it runs this block if it catches errors
        this.setState({hasError:true})

    }

    render(){
        if(this.state.hasError){   //if is true
            return <h1>OOPS THAT WAS AN ERROR....</h1>
        }

        return this.props.children   //children is anything that is between error boundary eg:cardlist
    }
}

export default ErrorBoundary;