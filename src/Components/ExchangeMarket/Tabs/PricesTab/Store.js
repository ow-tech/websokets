
import { createStore, applyMiddleware } from 'redux';
//createStore creates a Redux store that holds the complete state tree of your app
// applyMiddleware is a store enhancer that ships with redux

import thunk from 'redux-thunk';
//Redux Thunk is for communicating asynchronously with an external API to retrieve or save data. 
//Redux Thunk makes it easy to dispatch actions that follow the lifecycle of a request to an external API.

//reducers are statemachines that take a state and action as input and return an output
import rootReducer from './Reducers/rootReducer';


//Here we are exporting a method to configure store. This method will be referred to in index.js where we will be 
//initializing a store

export default function configureStore() {
 return createStore(
  rootReducer,
   applyMiddleware(thunk)
 );
}