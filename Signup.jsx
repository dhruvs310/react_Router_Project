import React from 'react'
import {useState} from "react";
import axios from "axios";
import {  useNavigate,NavLink } from 'react-router-dom';
import Login from './Login';
function Signup() {
    const redirect = useNavigate()
    const [formvalue, setFormValue] = useState({
        id: "",
        name: "",
        password: "",email: ""
        });
        // Onchange function 
        const onchange = (e) => {
        setFormValue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
        }

        const validation = () => {
        var result = true;
        if (formvalue.name == "" || formvalue.name == null) {
        result = false;
       alert('name faild is required');
        return false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
            result = false;
            alert('email faild is required');
            return false;
            }
        if (formvalue.password == "" || formvalue.password == null) {
        result = false;
        alert('password faild is required');
        return false;
  
        }
        return result;
        }
       
        const onsubmit = async(e) => {
        e.preventDefault();
        if (validation()) {
        const res = await axios.post(' http://localhost:3000/user',
       formvalue);
        console.log(res)
        
        setFormValue({...formvalue, name: "", email: "", password:
       "",  })
        console.log('res');
        redirect("/login")
        }
        }
  return (
    <div>   <div>
    <div className="logo" />
    <div className="login-block" style={{marginTop:"200px"}}>
      <h1>Signup</h1>
      <input type="text" value={formvalue.name} onChange={onchange} 
name='name'  placeholder="Username" id="username" />
 <input type="text" placeholder="Enter email" value={formvalue.email} onChange={onchange} 
name='email' id="username" />
      <input type="password"value={formvalue.password} onChange={onchange} 
name='password'  placeholder="Password" id="password" />
      <button  onClick={onsubmit}>Signup</button> <br />
     <NavLink to={"/login"} ><button>Login</button></NavLink>
    </div></div> 
   </div>
  )
}

export default Signup