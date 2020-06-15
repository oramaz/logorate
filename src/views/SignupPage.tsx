import React from "react";
import {
    EmailInputIcon,
    FBIcon,
    GooglePlusIcon, PwdInputIcon,
    TwitterIcon,
    VKIcon
} from "../assets/images/Icons";
import {useHistory} from "react-router-dom"

export const SignupPage: React.FC = () => {
    const history = useHistory();

    return (
        <div className="content-container-1">
            <div className="d-flex"  style={{marginBottom: "70px"}}>
                <div className="content-title mx-auto">
                    Sign up
                </div>
            </div>
            <div className="content-form-container mx-auto"  style={{marginBottom: "30px"}}>
                <form>
                    <div className="content-input-container" style={{marginBottom: "32px"}}>
                        <span className="input-icon"><EmailInputIcon/></span>
                        <input type="email" className="content-input" placeholder="Email" />
                    </div>
                    <div className="content-input-container" style={{marginBottom: "32px"}}>
                        <span className="input-icon"><PwdInputIcon/></span>
                        <input type="password" className="content-input" placeholder="Password" />
                    </div>
                    <div className="content-input-container" style={{marginBottom: "50px"}}>
                        <span className="input-icon"><PwdInputIcon/></span>
                        <input type="password" className="content-input" placeholder="Confirm the password" />
                    </div>
                    <div className="d-flex">
                        <button type="submit" className="content-btn mx-auto">Let's go!</button>
                    </div>
                </form>
            </div>
            <div className="d-flex">
                <div className="mx-auto content-text">
                    Already have an account?
                    <span style={{marginLeft: "10px"}}
                          className="content-text-link"
                          onClick={() => {
                              history.push("/login")
                          }}
                    >
                        Log in!
                    </span>
                </div>
            </div>
        </div>
    );
};
