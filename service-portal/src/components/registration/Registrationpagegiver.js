import React, { Component } from "react";
import '../stylesheets/Registrationpageseeker.css'
import { Route } from 'react-router-dom'
import axios from 'axios'
const Swal = require('sweetalert2')
var isEmpty = false;

function check_pass() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
       
        
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
    
}

class Registrationpagegiver extends Component {
    constructor(){
        super()
        this.state={
            fullName:'',
            email:'',
            phoneNo:'',
            gender:'',            
            password:'',
            
        }
        this.changeFullName = this.changeFullName.bind(this).non
        this.changeEmail = this.changeEmail.bind(this)
        this.changeGender = this.changeGender.bind(this)
        
        this.changePassword = this.changePassword.bind(this)
        this.changePhoneNo = this.changePhoneNo.bind(this)
        
        this.onSubmit=this.onSubmit.bind(this)
    }

    
        changeFullName(props){
            
            this.setState({
                fullName:props.target.value
            })
            
        }
        changeEmail(Event){
            this.setState({
                email:Event.target.value
            })
        }
        changeGender(Event){
            this.setState({
                gender:Event.target.value
            })
        }
        
        changePassword(Event){
            this.setState({
                password:Event.target.value
            })
        }
        changePhoneNo(Event){
            this.setState({
                phoneNo:Event.target.value
            })
        }
        

        onSubmit(Event){
            
            if (document.getElementById('message').innerHTML == 'matching') {
            Event.preventDefault()

            const registered = {
                fullName: document.getElementById('fullName').value,
                email:document.getElementById('email').value,
                phoneNo:document.getElementById('phoneNo').value,
                gender:document.getElementById('gender').value,
                
                password:document.getElementById('password').value,
                
            }
            if (registered.fullName == ''|| registered.email == ''|| registered.phoneNo == ''|| registered.gender == ''|| registered.password == '') {
                    isEmpty = true;
                }
                console.log(isEmpty);
            if (isEmpty) {
                Swal.fire({
                    title: 'error',
                    text: "Don't leave empty!!",
                    icon: 'error',
                    confirmButtonText: 'retry'
                  }).then((result) =>{
                      if (result.isConfirmed) {
                          window.location.replace('/regpagegiver')
                      }
                  }
                  )
            } else {             
                
                axios.post('http://localhost:4000/app/signupCustomer',registered)
                .then(Response => {
                    if (Response.status == 200) {
                        Swal.fire({
                            title: 'success',
                            text: "success",
                            icon: 'success',
                            confirmButtonText: 'ok'
                        }).then((result) =>{
                            if (result.isConfirmed) {
                                window.location.replace('/loginCustomer')
                            }
                        }
                        )
                    }
                })
        }

            this.setState({
                fullName:'',
                email:'',
                phoneNo:'',
                gender:'',                
                password:'',
                
            })
        }}


    render(){
    return (
    <header className='background'>
        
            <form className='container'>
                <p className="grey-text">Registration</p>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                    Your name :
                </label>
                <input type="text" id="fullName" className="form-control" placeholder='full name'/>
                <br />
                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                    Your email :
                </label>
                <input type="email" id="email" className="form-control" placeholder='(eg: rahul@gmail.com)'/>
                <br />


                <label htmlFor="phone no" className='grey-text'> 
                    Phone no :
                </label>                        
                <input id = "phoneNo" type="tel"  pattern="[0-9]{10}" className="form-control" placeholder='10-digit number' />
                <br />

                <label htmlFor="gender" className='grey-text'>
                    Gender :
                </label>
                &nbsp;&nbsp;
                <select name="gender" id="gender" className="dropdown" placeholder='gender'>
                    
                    <option value="male" placeholder='gender'>male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                    
                </select>                    
                    
                <br />

               

                <label htmlFor="defaultExperience" className="grey-text">
                    Password :
                        
                </label>
                <input type="password" name="password" id="password" onChange={check_pass} className="form-control" placeholder='password'/>
                <br />
                <label htmlFor="defaultExperience" className="grey-text">
                    Confirm pass :
                        
                </label>
                <input type="password" name="confirm_password" id="confirm_password" onChange={check_pass} className="form-control" placeholder='same as password'/>
                <span id='message'></span>
                <br />



                <Route render={({ history }) => (
                    <button value = 'Submit' className='signup' value='Submit' onClick={this.onSubmit}>
                        signup
                    </button>
                )} />   
            </form>
        
    </header>
                
    );
}
}

export default Registrationpagegiver ;