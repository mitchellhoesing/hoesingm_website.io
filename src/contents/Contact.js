import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email: hoesingmitch02@gmail.com</h3>
                <h3>LinkedIn: <a href="https://www.linkedin.com/in/mitch-hoesing/" target="https://www.linkedin.com/in/mitch-hoesing/"> https://www.linkedin.com/in/mitch-hoesing/</a></h3>
                <Social />
            </div>
        )
    }
}

export default Contact