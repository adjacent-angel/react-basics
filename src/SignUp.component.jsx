import React, { Component } from "react";
import { connect } from 'react-redux';
import { SUBMIT_FORM } from './redux/constants';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleInputChange = event => {
        const { value, name} = event.target;

        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        //this prevents the page from reloading after a submit action on form
        event.prevetDefault();
        //destructure state fields into individual variables
        const{ email, password, confirmPassword } = this.state;
        //check if password and confirmPassword are the same then submit info to reducer
        if(password === confirmPassword) {
            //another way to create an action that is dispatched
            this.props.dispatch({type: SUBMIT_FORM, payload: { email, password}});
            this.setState({email: '', password: '', confirmPassword: ''});
        } else {
            //alert user the password and confirm password do not match
            alert("Your password and confirmed password must match")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <p>Please provide the following information to sign up!</p>
                    <hr />
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        required
                    />
                    <hr />
                    <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>

                    <button type="submit" className="registerbtn">Register</button>
                </div>

                <div className="container signin">
                    <p>Already have an account? <a href="/">Sign In</a>.</p>
                </div>
            </form>
        );
    }
}

export default connect()(SignUp);