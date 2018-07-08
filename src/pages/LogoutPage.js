import React from 'react'
import {connect} from 'react-redux'
import {logout} from "../actions/authActions";

class LogoutPage extends React.Component
{
    componentDidMount()
    {
        this.props.dispatch(logout());
    }

    render()
    {
        return (<div />);
    }
}

export default connect(state => {
    return {};
})(LogoutPage);