import React from "react";
import { Link } from "react-router-dom";
export class Login extends React.Component {
    render() {
        return (
            <div style={{color:'white'}}>
                <h2><button onClick={this.props.onBack}>Back</button>Login</h2>
                <form>
                    <label>
                        Email Address:
                        <input type="email" />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="text" />
                    </label>
                    <br/>
                    <Link to='/Home'><button >Submit</button></Link>
                </form>
            </div>
        );
    }
}
