import React, { Component } from 'react';

class WidecardSingleDate extends Component {
    render() {
        return(
            <div class="widecard">
                <div class="compdet">
                    <h3>{this.props.title}</h3>
                    <h4 class="secondtext">{this.props.where}</h4>
                    <h4 class="secondtext">{this.props.date}</h4>
                </div>
            </div>
        )
    }
}

export default WidecardSingleDate