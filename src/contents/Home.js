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
              <h4>Profile Picture Placeholder</h4>
                <ReactTypingEffect className="typingeffect" text={['Hello! I am Mitch Hoesing']} speed={75} />
                <Social />
                <h4>
                   I am an enjoyer of disc golf, studying, programming, running, weight-lifting, cycling, reading,
                   cooking, meditation, photography, art and fishing.
                   I am open to other hobbies as well as I enjoy diving into new subjects and learning.
                </h4>
                <h4 className="credits">Credits for this website go to Abdul Wahid Naafi. <br className="tutorialLink"/>React tutorial: <a href="https://codeburst.io/learn-react-js-build-a-portfolio-single-page-application-spa-ba001082a711" target="https://codeburst.io/learn-react-js-build-a-portfolio-single-page-application-spa-ba001082a711">https://codeburst.io/learn-react-js-build-a-portfolio-single-page-application-spa-ba001082a711</a></h4>
            </div>
        )
    }
}

export default Home