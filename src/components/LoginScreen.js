import React from 'react';
import './Style.css'

function LoginScreen() {
    return (
        <div className="container">
            <div className="navbar">

            </div>
            <div className="content">
                <div>
                    <div className="section_1">
                        <button className="button">
                            Login with Github
                        </button><br/>
                        <button className="button">
                            Login with Twitter
                        </button>
                    </div>
                    <div className="separate"></div>
                    <div className="section_2">
                        <input type="text" className="input" placeholder="Username or Email"/><br/>
                        <input type="text" className="input" placeholder="Password"/><br/>
                        <button className="button">
                            Continue with email
                        </button>
                    </div>
                    <p className="text">
                        By continuing you are accepting to out <p className="underline">Terms and Conditions & Privacy Policy</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;