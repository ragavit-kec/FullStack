import { useState } from "react";
import {InfoContext} from '../hooks/InfoContext';
import { useContext } from "react";
import Reducer from "../hooks/Reducer";
import ReducerLike from "../hooks/ReducerLike";
const Services = () => {
    const {User} = useContext(InfoContext);
    return (
        <>
            <h1>Services</h1>
            <h2>Hi! {User.name}</h2>
            <h2>Age: {User.age}</h2>
            <h2>Department: {User.dep}</h2>
            <Reducer />
            <ReducerLike />
            <p>We provide a wide range of services to cater to your needs.</p>
        </>
    )
}
export default Services