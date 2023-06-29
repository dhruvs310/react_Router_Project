import React from 'react'
import {useState} from "react";
import axios from "axios";
import { NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const redirect=useNavigate()

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
        })
   
        const onchange = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value});
        //console.log(formvalue);
        }

        const validation = () => {
        var result = true;
        if (formvalue.email == "" || formvalue.email == null) {
        result = false;
        alert('Email Field is required !');
        return false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
        result = false;
        alert('Password Field is required !');
        return false;
        }
        return result;
        }
     
        const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
        const res = await
       axios.get(`  http://localhost:3000/user?email=${formvalue.email}`);
        if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
     
        localStorage.setItem('name', res.data[0].email);
        localStorage.setItem('id', res.data[0].password);
       alert('Login Successfull !');
        setFormvalue({ ...formvalue, email: "", password: "" });
        redirect('/main');

        }
        else {
            alert('Password Not valid!');
        setFormvalue({ ...formvalue, email: "", password: "" });
        }
        }
        else {
            alert('Username Not valid !');
        setFormvalue({ ...formvalue, email: "", password: "" });
        }}
      }
  return (
   <div >
  <div className="logo" />
  <div className="login-block" style={{marginTop:"200px"}}>
    <h1>Login</h1>
    <input type="text" name='email' value={formvalue.email} onChange={onchange}  placeholder="email" id="username" />
    <input type="password" name='password'value={formvalue.password} onChange={onchange}  placeholder="Password" id="password" />
    <button  onClick={onsubmit} >Login</button><br />
    
  </div>
 </div>

  )
}

export default Login