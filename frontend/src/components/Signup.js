import React from "react";
import { Link } from "react-router-dom";

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: '',
            formValid: false,
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value }, this.validateForm);
    }

    validateForm() {
        const { email, password, confirmPassword } = this.state;
        let emailError = '';
        let passwordError = '';
        let confirmPasswordError = '';
        let formValid = true;

        if (!email.includes('@') || !email.includes('.')) {
            emailError = 'Invalid email address';
            formValid = false;
        }
        if (password.length < 6) {
            passwordError = 'Password must be at least 6 characters long';
            formValid = false;
        }
        if (password !== confirmPassword) {
            confirmPasswordError = 'Passwords do not match';
            formValid = false;
        }

        this.setState({
            emailError,
            passwordError,
            confirmPasswordError,
            formValid
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.formValid) {
            this.setState({ submitted: true });
        }
    }

    render() {
        const { email, password, confirmPassword, emailError, passwordError, confirmPasswordError, formValid, submitted } = this.state;

        if (submitted) {
            return (
                <div style={{ color: 'white' }}>
                    <h2>Form Submitted Successfully!</h2>
                    <Link to='/Home'>Go to Home</Link>
                </div>
            );
        }

        return (
            <div style={{ color: 'white' }}>
                <h2><button onClick={this.props.onBack}>Back</button> Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email Address:
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                    </label>
                    <br />
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.handleChange}
                        />
                        {confirmPasswordError && <div style={{ color: 'red' }}>{confirmPasswordError}</div>}
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
