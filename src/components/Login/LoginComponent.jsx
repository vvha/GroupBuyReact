import React from 'react';
import {useState} from "react";
import classes from './LoginComponent.module.scss';
import {Link} from "react-router-dom";
import {LogoIco, EyeIco} from "src/assets/img/svg";


function LoginComponent(props) {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={classes.login_container}>

            <Link to="/" className={classes.logo}>
                <LogoIco/>
            </Link>
            <div className={classes.form_wrapper}>
                <h1>Личный кабинет</h1>
                <form action="">
                    <input type="text" placeholder="email"/>
                    <div className={classes.password_wrapper}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className={classes.password_toggle}
                            onClick={togglePasswordVisibility}
                            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                        >
                            <EyeIco isOpen={showPassword} className={classes.eye_icon} />
                        </button>
                    </div>
                    <button className={classes.submit_btn}>Войти</button>
                    <p>Нет аккаунта? <Link to="/registration" className={classes.link}>Зарегистрироваться</Link></p>
                </form>
            </div>

        </div>
    );
}

export default LoginComponent;