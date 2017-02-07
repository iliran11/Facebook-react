import React, {Component} from 'react';
import graph from 'fb-react-sdk';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FBloaded: false,
            tries: 0

        };

    }
    render() {
        return <div>{this.sayHello()}
        </div>
    }

    sayHello() {
        if (this.state.FBloaded) {
            return (
                <div>success !!!!</div>
            )
        } else {
            return <p>loading ...</p>
        }
    }

    componentDidMount() {
        this.fbSDK();
    }
    fbSDK() {
        console.log("trying sdk ...");
        window.fbAsyncInit = () => {
            FB.init({appId: '326022817735322', xfbml: true, version: 'v2.8'});
            FB.AppEvents.logPageView();
            console.log("inside the sdk");
            this.setState({FBloaded: true})

        };
        (function(d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

}
