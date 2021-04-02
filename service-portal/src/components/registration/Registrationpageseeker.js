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


class Registrationpageseeker extends Component {
    constructor(){
        super()
        this.state={
            fullName:'',
            email:'',
            phoneNo:'',
            gender:'',
            occupation:'',
            location:'',
            password:'',
            experience:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeGender = this.changeGender.bind(this)
        this.changeOccupation = this.changeOccupation.bind(this)
        this.changeLocation= this.changeLocation.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changePhoneNo = this.changePhoneNo.bind(this)
        this.changeExperience = this.changeExperience.bind(this)
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
        changeOccupation(Event){
            this.setState({
                occupation:Event.target.value
            })
        }
        changeLocation(Event){
            this.setState({
                location:Event.target.value
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
        changeExperience(Event){
            this.setState({
                experience:Event.target.value
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
                occupation:document.getElementById('occupation').value,
                location:document.getElementById('location').value,
                password:document.getElementById('password').value,
                experience:document.getElementById('experience').value
            }
            if (registered.fullName == ''|| registered.email == ''|| registered.phoneNo == ''|| registered.gender == ''|| registered.occupation == ''|| registered.location == ''|| registered.password == ''|| registered.experience == '') {
                 isEmpty = true;
                 
            }
            console.log(isEmpty);
            console.log(registered.fullName + registered.email + registered.phoneNo + registered.gender + registered.occupation + registered.location + registered.password + registered.experience );
            if (isEmpty) {
                Swal.fire({
                    title: 'error',
                    text: "Don't leave empty!!",
                    icon: 'error',
                    confirmButtonText: 'retry'
                  }).then((result) =>{
                      if (result.isConfirmed) {
                          window.location.replace('/regpageseeker')
                      }})
            }else{            
                axios.post('http://localhost:4000/app/signupProfessional',registered)
                .then(Response => {
                    if (Response.status == 200) {
                        Swal.fire({
                            title: 'success',
                            text: "success",
                            icon: 'success',
                            confirmButtonText: 'ok'
                        }).then((result) =>{
                            if (result.isConfirmed) {
                                window.location.replace('/loginProfessional')
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
                occupation:'',
                location:'',
                password:'',
                experience:''
            })
            
        }
        
    }
    

    render(){
    return (
    <header className='background'>
          <div className='division'><form className='container' >
                <p className="grey-text">Registration</p>
                <label htmlFor="defaultFormContactNameEx" className="grey-text" >
                    Your name :
                </label>
                <input type="text" id="fullName" className="form-control" placeholder='full name' onChange={this.changeFullName} value={this.state.fullName} />
                <br />
                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                    Your email :
                </label>
                <input type="email" id="email" className="form-control" placeholder='(eg: rahul@gmail.com)' onChange={this.changeEmail} value={this.state.email}/>
                <br />


                <label htmlFor="phone no" className='grey-text'> 
                    Phone no :
                </label>                        
                <input type="tel" id = 'phoneNo' pattern="[0-9]{10}" className="form-control" placeholder='10-digit number' onChange={this.changePhoneNo} value={this.state.phoneNo}/>
                <br />

                <label htmlFor="gender" className='gender'>
                    Gender :
                </label>
                &nbsp;&nbsp;
                <select name="gender" id="gender" className="dropdown" placeholder='gender' onChange={this.changeGender} value={this.state.gender}>
                    
                    <option value="male" placeholder='gender'>male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                    
                </select>                    
                    
                <br />


                <label for="occupation" className='grey-text'>Occupation :</label>
                <select name="occupation" id="occupation" className="dropdown" onChange={this.changeOccupation} value={this.state.occupation}>
                    <option value="carpenter">carpenter</option>
                    <option value="tutor">tutor</option>
                    <option value="other">other</option>

                </select>
                <br />
               
                <label for="location" className='grey-text'>Location :</label>
                <select name="location" id="location" className="dropdown" onChange={this.changeLocation} value={this.state.location}>
                    <option value="mumbai">mumbai</option>
                    <option value="hyderabad">hyderabad</option>
                    <option value="delhi">delhi</option>
                    <option value="other">other</option>

                </select>
                <br />

                <label htmlFor="defaultExperience" className="grey-text">
                    Password :
                        
                </label>
                <input type="password" name="password" id="password" className="form-control" placeholder='password' onChange={this.changePassword} value={this.state.password}/>
                <br />
                <label htmlFor="defaultExperience" className="grey-text">
                    Confirm 
                    Password :
                        
                </label>
                <input type="password" name="confirm_password" id="confirm_password" onChange={check_pass} className="form-control" placeholder='same as password'/>
                <span id='message'></span>
                <br />



                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                    Experience :
                </label>
                
                <textarea type="text" id="experience" className="form-control" rows="2" placeholder='brief bio' onChange={this.changeExperience} value={this.state.experience} />
                <br />
                <Route render={({ history }) => (
                    <button value = 'Submit' className='signup' value='Submit' onClick={this.onSubmit}>
                        sign-up
                    </button>
                )} />   
            </form></div>
            
        
    </header>
                
    );
}
}

export default Registrationpageseeker;