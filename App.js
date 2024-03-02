import React, { useEffect,useState,createContext} from "react";
import{Route,Routes, useNavigate} from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import axios from "./axiosConfig";

export const Appstate=createContext();
function App() {
  const[user,setuser]=useState({});
  const token=localStorage.getItem('token')
  console.log(token);
  const navigate=useNavigate()
   async function checkuser(){
    try {
      const {data}=await axios.get('/users/check',{
        headers:{
          Authorization:'Bearer ' +token,
        },
      });
      console.log(data.username);
      // setuser(data);
     
    } catch (error) {
      console.log(error.response);
      navigate('/login')
    }
  }
  useEffect(()=>{
checkuser()
  },[])
  return (
<Appstate.Provider value={{user,setuser}}>
        
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
      </Routes> 
      </Appstate.Provider>
      
  
      

    
  );
}

export default App;
