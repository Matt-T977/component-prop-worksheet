import React, { Component } from 'react';



class AlertButton extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    alert = (event) => {
        alert('devCodeCamp')
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.alert}>Alert Button</button>
            </div>
         );
    }
}
 
export default AlertButton;