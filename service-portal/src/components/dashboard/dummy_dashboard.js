import React, { Component } from 'react'
import { withRouter } from 'react-router';



class dashboard extends Component {

    openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";       
    }
    
    
    closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";}
    Logout(){
        document.cookie="jwt="+ ";" + "max-age=" + (0);
    }
    
    render() {
        return (
            <div>        
                <div className="topnav">
                    <a className="active" href="/" onClick={this.Logout}>Logout</a>
                    <a to="/news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                    </div>       
                
                    <div id="mySidebar" className="sidebar">
                        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                        </div>

                        <div id="main">
                        <button className="openbtn" onClick={this.openNav}>&#9776;</button>
                            <form>
                                <p>
                                    isjfiowjviwvmkwvomeiorvjmeroivje
                                </p>
                                <p>
                                    ksefoiewmfnoiewjvmweopigvmew
                                </p>
                            </form>
                        </div>

                   
            
            </div>
        )
    }
}
export default withRouter(dashboard)
