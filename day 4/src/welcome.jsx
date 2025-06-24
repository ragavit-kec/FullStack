import { useState } from "react";

const Welcome = (props) => {
    return (
        <>
            <h1>Welcome {props.name}</h1>
            <h1>Country {props.country}</h1>
        </>
    )
}
export default Welcome