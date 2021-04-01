
    import React, { Component } from 'react'
    import '../components/stylesheets/sidebar.css'
    
    export class sidebar extends Component {

        /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
            openNav() {
                document.getElementById("mySidebar").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
            }
            
            /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
            closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";}


        render() {
            return (
                <div>
                    
                    <div id="mySidebar" class="sidebar">
                        <a href="javascript:void(0)" class="closebtn" onclick={this.closeNav}>&times;</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                        </div>

                        <div id="main">
                        <button class="openbtn" onclick={this.openNav}>&#9776; Open Sidebar</button>
                        <h2>Collapsed Sidebar</h2>
                        <p>Content...</p>
                        </div>
                </div>
            )
        }
    }
    
    export default sidebar
    