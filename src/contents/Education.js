import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import WidecardSingleDate from '../components/WidecardSingleDate';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Bachelor's of Science - Computer Science" where="Oregon State University" from="September 2015" to="June 2019"/>
                <WidecardSingleDate title="Machine Learning Certificate" where="Stanford Online via Coursera" date="June 2022"/>
                <Widecard title="High School Diploma" where="Lebanon High School" from="2005" to="2009"/>
            </div>
        )
    }
}

export default Education