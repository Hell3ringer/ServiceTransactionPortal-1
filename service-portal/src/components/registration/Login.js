
import axios from 'axios'
//import { response } from 'express'
import React, { Component } from 'react'
import {Link,Redirect,Route} from 'react-router-dom'

import '../stylesheets/Login.css'

const Swal = require('sweetalert2')
const cookieParser = require('cookie-parser')



class Login extends Component {   
    

    sign(){      
         
        
        axios.get('http://localhost:4000/app/signupProfessional',{
            params :{
                loginEmail:document.getElementById('email').value,
                loginPassword:document.getElementById('password').value
            }
        },{withCredentials: true})
        .then(Response => {
            console.log(Response.data);
            /* var id = Response.data.id
            var name = Response.data.name
            document.cookie="id=" + id + ";" + "max-age=" + (24*60*60) ;
            document.cookie="name=" + name + ";" + "max-age=" + (24*60*60);  */
            document.cookie="jwt=" + Response.data + ";" + "max-age=" + (24*60*60*1000); 
            if (Response.data == '-1') {
                Swal.fire({
                    title: 'wrongPass!',
                    text: 'Wrong password',
                    icon: 'error',
                    confirmButtonText: 'retry'
                  })
                
            }else if (Response.data == '-2') {
                Swal.fire({
                    title: 'Error!',
                    text: "User dosen't exist",
                    icon: 'error',
                    confirmButtonText: 'retry'
                  })
            }
            else if(Response.data!= null){
                
                Swal.fire({
                    title: 'success',
                    text: "success",
                    icon: 'success',
                    confirmButtonText: 'ok'
                  }).then((result) =>{
                      if (result.isConfirmed) {
                        window.location.replace('/profHome')                         
                      }
                  }
                  )
                
            }
            
            
            
        })
        
        
    
    }



    render(){
    return (
        <div className='container-login'>
               
            
            <h1 className='text'>
                Email 
            </h1>
            <input type='text' id = 'email' className="box" placeholder='email'></input>

            <h1 className='text'>
                password 
            </h1>
            <input id = 'password' type='password' className="box" placeholder='password'></input>
            <p className='text-account'>
                Dont have a account? <Link to ='/regpageseeker' >click here </Link>  
                               
                
            </p>
            <Route render = {({history}) => (
                
                    <button className='signin' onClick={this.sign} >sign-in</button>                       
                    
                )} />
                
            
            
        
            

    
        
        </div>
    )
}}

export default Login
