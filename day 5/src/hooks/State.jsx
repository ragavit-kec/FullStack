import { useState } from "react";

const State = () => {
    const [count, setCount]=useState(0)
    const [like, setLike]=useState(0)
    const [unlike, setUnlike]=useState(0)
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Like and Dislike count</h1>
            <button onClick={()=>setLike(like+1)}>👍{like}</button>
            <button onClick={()=>setUnlike(unlike+1)}>👎{unlike}</button>
        </div>
    )
}
export default State