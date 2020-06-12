import React, { Component } from 'react'

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
        console.log(this.state);
        e.target.email.value = '';
        e.target.password.value = '';
        e.target.firstname.value = '';
        e.target.lastname.value = '';
    }

    render() {
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
                        <button className="pink darken-3 btn waves-effect waves-light">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
