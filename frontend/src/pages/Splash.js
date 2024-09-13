import React from "react";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";

export class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentForm: null };

        this.handleFormClick = this.handleFormClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleFormClick(form) {
        this.setState({ currentForm: form });
    }

    handleBackClick() {
        this.setState({ currentForm: null });
    }

    render() {
        return (
            <div 
            style={{
                backgroundColor: 'black',
                backgroundImage: 'url("/assets/images/Picture1.png")',
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                height: '100vh',
                width: '100vw', 
                margin: 0,
                padding: 0, 
                position: 'absolute',
                top: 0,
                left: 0,
                color:'white'
            }}
        >
           
                {this.state.currentForm === null ? (
                    <div>
                        <button onClick={() => this.handleFormClick('log')}>Login</button>
                        <button onClick={() => this.handleFormClick('sig')}>Signup</button>
                    </div>
                ) : (
                    <div>
                        {this.state.currentForm === 'log' && <Login onBack={this.handleBackClick} />}
                        {this.state.currentForm === 'sig' && <Signup onBack={this.handleBackClick} />}
                    </div>
                )}
            </div>
        );
    }
}
