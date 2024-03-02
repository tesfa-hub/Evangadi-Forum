import React, { useContext } from 'react'
import { Appstate } from '../App';
function Home() {
  const {user}=useContext(Appstate);
  console.log(user.username);
  return (
    <div>
    <h1>Home</h1>
    <br/>
    <br/>
    <br/>
    <h2>"welcome"{user.username} </h2>
    </div>
  )
}

export default Home