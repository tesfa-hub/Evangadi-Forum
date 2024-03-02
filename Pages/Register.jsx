import React from 'react';
import {useRef} from 'react'
import axios from "../axiosConfig"
import { useNavigate } from 'react-router-dom';

function Register() {
const navigate=useNavigate()
  const usernameDom=useRef();
  const firstnameDom=useRef();
  const lastnameDom=useRef();
  const emailDom=useRef();
  const passwordDom=useRef();

   async function handleSubmit(e){
    e.preventDefault();
    const usernameValue=usernameDom.current.value;
    // console.log(emailValue);
    const firstnameValue=usernameDom.current.value;
    const lastnameValue=usernameDom.current.value;
    const emailValue=usernameDom.current.value;
    const passwordValue=usernameDom.current.value;
    if(!usernameValue||!firstnameValue||!lastnameValue||!emailValue||!passwordValue){
alert("please provide all the necessary information");
return
    }
    console.log(usernameDom.current.value);
    
  try {
    await axios.post('/users/register',
    {username:usernameValue,
    firstname:firstnameValue,
    lastname:lastnameValue,
    email:emailValue,
    password:passwordValue

    })
    alert("registration successful");
    navigate("/login");
   
  } catch (error) {alert("something went wrong")
    console.log(error.response);
  }

  }
  return (
    <section>
      
      <form onSubmit={handleSubmit}>
        <div>
          <span>UserName:</span>
          <input ref={usernameDom} type='text' placeholder='username' />
          </div>
          <br/>
          <div>
          <span>FirstName:</span>
          <input  ref={firstnameDom} type='text' placeholder='firstname'/>
          </div>
          <br/>
          <div>
          <span>LastName:</span>
          <input  ref={lastnameDom}type='text' placeholder='lastname'/>
          </div>
          <br/>
          <div>
          <span>Email:</span>
          <input  ref={emailDom}type='email' placeholder='email'/>
          </div>
          <br/>
          <div>
          <span>Password:</span>
          <input  ref={passwordDom} type='password' placeholder='password'/>
          </div>
          <button type='Submit'>Register</button>
          
      </form>
    </section>
  )
}

export default Register