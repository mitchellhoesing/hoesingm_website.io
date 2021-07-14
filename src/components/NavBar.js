import React, { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {

    constructor(props){
        
        super(props);        
        this.state={
            'NavItemActive':''
        }
    }

    /* What is going on here? */
    // The activeitem() method takes an input parameter "x" which is the clicked Navitem's ID.
    // It will then check if there's already anything(any element's ID) stored in the "NavItemActive"
    // state object, if TRUE then it will remove the CSS ".active" class from that element
    // ELSE it will set the state object to the Navitem's ID which is clicked by the user.
    // And then a callback function will run which will add the CSS ".active" class to the clicked Navitem.
    activeitem=(x)=> {
        if(this.state.NavItemActive.length>0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }

        this.setState({'NavItemActive':x}, ()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };


    render() {
        return (
            <nav>
                <ul>
                    <NavItem item="Home" tolink="/" activec={this.activeitem}></NavItem>
                    <NavItem item="About" tolink="/about" activec={this.activeitem}></NavItem>
                    <NavItem item="Education" tolink="/education" activec={this.activeitem}></NavItem>
                    <NavItem item="Skills" tolink="/skills" activec={this.activeitem}></NavItem>
                    <NavItem item="Projects" tolink="/projects" activec={this.activeitem}></NavItem>
                    <NavItem item="Contact" tolink="/contact" activec={this.activeitem}></NavItem>
                </ul>
            </nav>
        )
    }
}

export default Navbar