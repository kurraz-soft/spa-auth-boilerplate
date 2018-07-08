import React from 'react';
import LoginPage from "./pages/LoginPage";
import {HashRouter, Route} from 'react-router-dom'
import SignUpPage from "./pages/SignUpPage";
import GamePage from "./pages/GamePage";
import {connect} from 'react-redux';
import {authenticate} from "./actions/authActions";
import LogoutPage from "./pages/LogoutPage";
import {init} from "./actions/gameActions";

class App extends React.Component {

    checkHash()
    {
        if(this.props.is_guest)
            window.location.hash = '/';
        else
            window.location.hash = '/game';
    }

    componentDidMount()
    {
        this.props.dispatch(authenticate()).then(() => {
            this.checkHash();
        }).catch(() => {
            this.checkHash();
        });

        this.props.dispatch(init());
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps.is_guest !== this.props.is_guest)
            this.checkHash();
    }

    render() {
        return (
          <div className="App">
              <HashRouter>
                  <div>
                      <Route exact path="/" component={LoginPage} />
                      <Route exact path="/signup" component={SignUpPage} />
                      <Route exact path="/game" component={GamePage} />
                      <Route exact path="/logout" component={LogoutPage} />
                  </div>
              </HashRouter>
          </div>
        );
  }
}

export default connect((state) => {
    return {
        is_guest: state.auth.is_guest,
    };
})(App);
