import React, { useEffect, useState } from 'react'
import {auth,provider} from "./config.jsx"
import { signInWithPopup } from 'firebase/auth'
import Home
 from '../page/home/Home.jsx';

function Signup() {
    const [value , setValue] =useState();
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.use.email)
            localStorage.setItem('email' ,data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })


  return (
    <div>
        {value?<home/>:
        <button onClick={handleClick}>
        sign in with Google
    </button>}
    
        
    </div>
  )
}

export default Signup