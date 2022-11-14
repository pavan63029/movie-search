import React,{useState} from 'react'
import "./App.css"
import Movielist from './Movielist'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] =useState()
  const [password,setpassword] =useState()
    const changeHandler = e =>{
        e.preventDefault()
        setEmail("")
        setpassword("")
    }
    function onChangehandle(e){
        setEmail(e.target.value)
    }
    function onChangehandl(e){
        setpassword(e.target.value)
    }
       
           
    
    return (
        <div class="background">
          <div  class="center">
            <center>
                <form autoComplete="off" >
                    <h1>Sign in your account</h1>
                    <input class="search" type="email" name="email" value={email} placeholder="Email" onChange={onChangehandle}/><br /><br />
                    <input class="search" type="password" name="password" value={password} placeholder="Password" onChange={onChangehandl}/><br /><br />
                    
                    
                    <button class="button" onClick={changeHandler }>
                    <Link to="/movielist"> 
                        
                        Log In
                          </Link>
                        </button> &nbsp;&nbsp;
    <p>PLEASE ENTER PASSWORD AND EMAIL </p>

                </form>
            
            </center>
            </div>
        
        </div>
    )
}

export default Login