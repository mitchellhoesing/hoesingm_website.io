import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "react-router-dom";
//import profilepic from '../profilepicpath.png';

import Social from '../components/Social';

class Home extends Component {
    render(){
        return(
            <div className="condiv home">
              {/*<img src={profilepic} className="profilepic"></img>*/}
                <ReactTypingEffect className="typingeffect" text={['I am Mitch Hoesing']} speed={100} eraseDelay={700}/>
                <Social />
                
                <h4 className="credits">Credits for this website go to Abdul Wahid Naafi. <br className="tutorialLink"/>React tutorial: <a href="https://codeburst.io/learn-react-js-build-a-portfolio-single-page-application-spa-ba001082a711" target="https://codeburst.io/learn-react-js-build-a-portfolio-single-page-application-spa-ba001082a711">https://codeburst.io/learn-react-js-build-a-portfolio-single-page-application-spa-ba001082a711</a></h4>
            </div>
        )
    }
}

export default Home