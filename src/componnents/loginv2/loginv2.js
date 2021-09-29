import React, { useState } from 'react';
import './login.scss';
import Cloud1 from './images/cloud1.svg';
import Cloud2 from './images/cloud2.svg';
import Cloud3 from './images/cloud3.svg';
import CloudBG from './images/background.svg';

// desktop 
import CloudBottomLeftDesktop from './images/desktop/leftBottomCloud.png';
import Group4Images from './images/desktop/group4.svg';
import Group5Images from './images/desktop/group5background.svg';
import TinyCloud from './images/desktop/tinyCloud.svg';

function LoginV2({ setPage }) {

    const loginTry = () => {

        setLoginErrorState({ phoneNumberError: false, userIdError: false });

        if (loginForm.userId.length >= 9 && loginForm.phoneNumber.length >= 10) {
            setPage(2);
        }
        else {
            if (loginForm.userId.length < 9)
                setLoginErrorState({ ...setLoginErrorState, userIdError: true });

            if (loginForm.phoneNumber.length < 10)
                setLoginErrorState({ ...setLoginErrorState, phoneNumberError: true });
        }
    }

    const initialLoginErrorsValues = {
        userIdError: false,
        phoneNumberError: false
    };

    const initialLoginValues = {
        userId: '',
        phoneNumber: ''
    };

    const handleInputChange = (event) => {
        if (!event) return;
        let { name, value } = event.target
        setLoginState({
            ...loginForm,
            [name]: value
        })
    }

    const [loginForm, setLoginState] = useState(initialLoginValues);
    const [loginFormErrors, setLoginErrorState] = useState(initialLoginErrorsValues);

    return (
        <div class="warp">
            <div class="bg"></div>
            <div class="container">
                <div class="mobileImages">
                    <img src={Cloud1} id="cloud1" />
                    <img src={Cloud2} id="cloud2" />
                    <img src={Cloud3} id="cloud3" />
                    <img src={CloudBG} id="background" />
                </div>
                <div class="desktopImages">
                    <div class="ratio" id="r1">
                        <img src={Group4Images} id="group4images" />
                    </div>

                    <img src={TinyCloud} id="tinyCloud" />
                </div>


                <div className="loginBox">
                    <div className="loginBox--header">
                        <span id="arrowBackButton" ></span>
                        <div id="dots">
                            <span id="dot1"></span>
                            <span id="dot2"></span>
                            <span id="dot3"></span>
                        </div>

                    </div>

                    <h1>התחברות</h1>
                    <span>כדי לצפות בכל המידע האישי שלך</span>
                    <form method="post">
                        <div class="content">
                            <div class="mt-4">
                                <label for="id">מספר תעודת זהות</label>
                                <input type="text" name="userId" id="id" className="input"
                                    value={loginForm.userId}
                                    onChange={handleInputChange} />
                                {loginFormErrors.userIdError && <div className="text-muted" >
                                    אנא הכנס תעודת זהות תקנית
                                </div>}

                            </div>
                            <div class="mt-4">
                                <label for="phoneNumber">מספר טלפון</label>
                                <input type="phone" name="phoneNumber"
                                    id="phoneNumber"
                                    className="input"
                                    value={loginForm.phoneNumber}
                                    onChange={handleInputChange} />
                                {loginFormErrors.phoneNumberError && <div className="text-muted" >
                                    אנא הכנס מספר פלאפון תקנית
                                </div>}

                            </div>
                        </div>
                        <div class="divButton">
                            <button type="button" className="button" onClick={loginTry}>התחברות</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )

}

export default LoginV2;