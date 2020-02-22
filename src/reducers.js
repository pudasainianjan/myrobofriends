import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED 
} from './constants.js';


const initialStateSearch = {      //initial obj we have in redux store
    searchField: ''
}

export const searchRobots = (state = initialStateSearch, action={}) => {          //this is reducer
    //console.log(action.type+' '+action.payload+' '+action.payload);
    switch(action.type){    //switch is recommended instead of if statement
        case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }  //if we receive an actions called change search field , return new state with action.payload (whatever the user has input)
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state = initialStateRobots , action ={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state, { isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state , { robots: action.payload ,isPending:false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state , { error: action.payload, isPending: false});
        default:
            return state;

    }
}