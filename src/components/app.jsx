import React, {Component} from 'react';
import graph from 'fb-react-sdk';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FBloaded: false

        };

    }
    render() {
        console.log(this.state);
        return (
            <div>{this.sayHello()}</div>
        );
    }
    sayHello() {
        return <p>
            hello
        </p>
    }

    componentDidMount() {
        var self = this;
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');

                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });

    }
}
