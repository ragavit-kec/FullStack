import { useState } from "react";
import './Form.css'
const Form = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        department:'',
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }
    return (
        <div>
            <div className='form-control'>
                <h1>Form Registeration</h1> 
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name:</label><br/>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/> <br/>
                    <label htmlFor="">Email:</label><br/>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/> <br/>
                    <label htmlFor="">Password</label><br/>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/> <br/>
                    <label htmlFor="">Department</label><br/>
                    <input type="text" name="department" value={formData.department} onChange={handleChange}/> <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Form