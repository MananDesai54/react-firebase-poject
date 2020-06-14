import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actionCreator/authActions';

class SignUp extends Component {

    state = {
        email:null,
        password:null,
        firstname:null,
        lastname:null
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {

        const { auth,authError } = this.props;
        if(auth.uid) return <Redirect to="/" />

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
                        <label htmlFor="firstname">
                            Firstname
                        </label>
                        <input type="text" id="firstname" autoComplete="off" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">
                            Lastname
                        </label>
                        <input type="text" id="lastname" autoComplete="off" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="pink darken-3 btn waves-effect waves-light">Sign Up</button>
                        { authError?<p className="center red-text">{authError}</p>:'' }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
