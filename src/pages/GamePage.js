import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class GamePage extends React.Component
{
    render()
    {
        return (
            <div>
                <div>Logged in as {this.props.auth_data.username}</div>
                <div>
                    <Link to={'/logout'}>Logout</Link>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        auth_data: state.auth.data,
    }
})(GamePage);