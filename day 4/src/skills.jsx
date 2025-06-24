import { useState } from "react";

const Skills = ({skill}) => {
    return (
        <>
            <h1>Skills</h1>
            <ul>
                {skill.map((s,index)=>(
                    <li key={index}>{s}</li>
                ))}
            </ul>
        </>
    )
}
export default Skills