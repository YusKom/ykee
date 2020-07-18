import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img src="https://cdn.imgbin.com/23/20/1/imgbin-computer-icons-user-material-design-business-login-dizzy-ewrGzdFVeB0hkYUk3QKvfzuVP.jpg" />
           <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;