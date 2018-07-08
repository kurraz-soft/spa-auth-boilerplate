import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from "../actions/authActions";

class SignUpPage extends React.Component
{
    constructor()
    {
        super();
        this.state = {error: ""}
    }

    handleSubmit(e)
    {
        e.preventDefault();

        this.props.dispatch(register(this.username.value,this.password.value))
            .then(() => {
                this.setState({error: ""});
            })
            .catch(reason => {
                this.setState({error: reason});
            });
    }

    render()
    {
        return (
            <div className="bg-warning" style={{position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh'}}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4 col-10 m-auto card">
                            <form className="card-body text-center" onSubmit={this.handleSubmit.bind(this)}>
                                <h4>Sign Up</h4>
                                <div className='text-danger mb-1'>{this.state.error}</div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" ref={(input) => this.username = input} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={(input) => this.password = input} />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary w-100 text-uppercase">Register</button>
                                </div>
                                <div className="small mt-1">
                                    Already registered? <Link className="text-primary" to="/">Sign In</Link>
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
    return {};
})(SignUpPage);