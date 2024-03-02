import React,{useRef}from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "../axiosConfig"
// import classes from'./css/Login.module.css'


function Login() {

  const navigate=useNavigate()
  const emailDom=useRef();
  const passwordDom=useRef();

  async function handleSubmit(e){
    e.preventDefault();
  
  
    const emailValue=emailDom.current.value;
    const passwordValue=passwordDom.current.value;
    if(!emailValue||!passwordValue){
  alert("please provide all the necessary information");
  return
    }
    // console.log(usernameDom.current.value);
  try {
   const {data}= await axios.post('/users/login',
    {"email":emailValue,
    "password":passwordValue
  
    })
    alert("login successful");
    // console.log(response.data.token);
    navigate("/");
    localStorage.setItem('token',data.token);
    // console.log(data);
   
  } catch (error) {
    alert(error?.response?.data?.msg);
    console.log(error.response.data);
  }
  
  }
  return (
    <section>
 <form onSubmit={handleSubmit}>
      <div>
      <span>Email:</span>
      <input  ref={emailDom}type='email' placeholder='email'/>
      </div>
      <br/>
      <div>
      <span>Password:</span>
      <input  ref={passwordDom} type='password' placeholder='password'/>
      </div>
      <button type='Submit'>Login</button>
      
  </form>
</section>
  )
  }

export default Login