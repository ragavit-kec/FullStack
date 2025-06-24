import { useReducer } from 'react';
import React from 'react';
let initialValue=0
const counter = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialValue;
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}
const Reducer = () => {
    const [state, dispatch] = React.useReducer(counter, initialValue);
    return (
        <div>
            <h1>Count: {state}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <hr />
            <h1>Reducer Example</h1>
            <p>UseReducer is a hook that is used to manage complex state logic in React applications. It is an alternative to useState and is particularly useful when dealing with multiple state variables or when the next state depends on the previous state.</p>
            <p>It takes a reducer function and an initial state as arguments, and returns the current state and a dispatch function to update the state.</p>
        </div>
    )
}
export default Reducer;