import React, { Component } from "react";

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state={
            'myskills':['Python','Unity','C#','React','Bash','PowerShell','TensorFlow','Active Directory','Windows','Linux','OSX','Microsoft Office','Calculus','Physics','Statistics',
                        'Written and Oral Communication','Team Work','Self Directed','Work Ethic']
        };
    }
    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=>{
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills