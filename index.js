import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import todos from './reducers';
import { addTodo, toggleTodo, editTodo, deleteTodo } from './actions';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const store = createStore(todos);
console.log('Initial State', store.getState());

store.dispatch(addTodo('Dispatch my first action'));
console.log('state after adding first todo', store.getState());

store.dispatch(addTodo('Go shopping'))
console.log('State after adding second todo', store.getState());

store.dispatch(addTodo('Go for a walk'));
console.log('State after adding third todo', store.getState());

store.dispatch(addTodo('Dispatch my last action'));
console.log('state after adding last todo', store.getState());

store.dispatch(toggleTodo(0));
console.log('State after toggling first todo', store.getState());

store.dispatch(toggleTodo(2));
console.log('state after toggling third todo', store.getState())

store.dispatch(editTodo('editing this todo', 2));
console.log('state after editing', store.getState())

store.dispatch(deleteTodo(1));
console.log('state after deleting second todo', store.getState())