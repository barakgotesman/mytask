import React, { useState } from 'react';
import './LoginSuccess.css';
import Cloud1 from './images/cloud1.svg';
import Cloud2 from './images/cloud2.svg';
import CloudBottom from './images/bottomCloud.svg';

function LoginSuccess({ setPage }) {
    return(
        <>
        <img src={Cloud1} id="cloud1" />
        <img src={Cloud2} id="cloud2" />

        <div className="LoginSuccessBox">
            <h1>שלחנו לך SMS עם קוד חד פעמי</h1>
            <h3>מה הקוד שקיבלת?</h3>

            <input readOnly className="showCode" value="636329"/>
            <span className="sendAgain">לא קיבלתי קוד</span>

            <button className="button">המשך</button>
        </div>

        <img src={CloudBottom} id="cloudBottom" />
        </>
    )
}

export default LoginSuccess;