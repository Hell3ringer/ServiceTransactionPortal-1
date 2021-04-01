import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import dashboard from '../components/dashboard/dummy_dashboard.js'
import Home from '../components/dashboard/Home.js';
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();

var token = document.cookie.split('=')[1];



export function ProtectedRouteCustomer({ component:Component ,...rest}) {
    var auth = false;
    if (token) {
        jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
            if (err) {
                auth = false;
            } else {
                if (decodedToken.type == 'customer') {
                    auth = true;
                } else {
                    auth = false;
                }
            }
        })
    }else{
        auth = false;
    }
return (
    
        <Route {...rest} render = {(props) => {                           
            if (auth) {
                return <Component {...props} />
            } else {
                return <Redirect to ={{pathname:'/',state : props.location}} />
            }
        }}
        />
    )
}
export function ProtectedRouteProfessional({component:Component,...rest}) {
    var auth = false;
    if (token) {
        jwt.verify(token,"thisisakeyforthejwtandisaccessedatthebackendonly",(err,decodedToken) => {
            if (err) {
                auth = false;
            } else {
                if (decodedToken.type == 'professional') {
                    auth = true;
                } else {
                    auth = false;
                }
            }
        })
    }else{
        auth = false;
    }
    
     
    return (
        <Route {...rest} render = {(props) => {           
            if (auth) {
                return <Component {...props} />
            } else {
                return <Redirect to ={{pathname:'/',state : props.location}} />
            }
        }}
        />
    )
}
