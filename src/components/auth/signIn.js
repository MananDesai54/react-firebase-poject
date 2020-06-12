import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actionCreator/authActions';

class SignIn extends Component {

    state = {
        email:null,
        password:null
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
        e.target.email.value = '';
        e.target.password.value = '';
        this.props.signIn(this.state);
    }

    render() {

        const { authError } = this.props;
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-grey-darken">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" autoComplete="off" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" id="password" autoComplete="off" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="pink darken-3 btn waves-effect waves-light">Login</button>
                        <div className="red-text center">
                            {authError?<p>Login failed check credentials</p>:''}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        authError:state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signIn:(credencial)=>{dispatch(signIn(credencial))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
