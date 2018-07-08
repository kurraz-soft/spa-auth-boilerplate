import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from "../actions/authActions";

class LoginPage extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            login: "",
            password: "",
        };
    }

    handleSubmit(e)
    {
        e.preventDefault();
        this.props.dispatch(login(this.state.login, this.state.password)).catch(reason => {});
    }

    handleChangeLogin(e)
    {
        this.setState({login: e.target.value});
    }

    handleChangePassword(e)
    {
        this.setState({password: e.target.value});
    }

    render()
    {
        const bg_style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
        };

        return (
            <div className="bg-warning" style={bg_style}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4 col-10 m-auto card">
                            <form className="card-body text-center" onSubmit={this.handleSubmit.bind(this)}>
                                <h4>Sign In</h4>
                                <div className="small text-danger mb-1">{this.props.error}</div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.login} onChange={this.handleChangeLogin.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary w-100 text-uppercase">Login</button>
                                </div>
                                <div className="small mt-1">
                                    Not Registered? <Link className="text-primary" to="/signup">Create an account</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        error: state.auth.form_error,
    }
})(LoginPage);