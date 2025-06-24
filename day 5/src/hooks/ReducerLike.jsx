import {useReducer} from 'react';
const ReducerLike = () => {
    const [state, dispatch] = useReducer(Reducer, {like: 0, unlike: 0});
    
    return (
        <div>
            <h1>Like and Dislike Count</h1>
            <button onClick={() => dispatch({type: 'LIKE'})}>👍 {state.like}</button> 
            <button onClick={() => dispatch({type: 'UNLIKE'})}>👎 {state.unlike}</button>
        </div>
    );
};
const Reducer = (state, action) => {
    switch (action.type) {
        case 'LIKE':
            return {...state, like: state.like + 1};
        case 'UNLIKE':
            return {...state, unlike: state.unlike + 1};
        default:
            return state;
    }
};
export default ReducerLike;
