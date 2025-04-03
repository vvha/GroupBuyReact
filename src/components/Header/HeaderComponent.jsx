import React from 'react';
import classes from "./Header.module.scss";
import {Link} from "react-router-dom";
import {LogoIco, SearchIco, MessagesIco, NotificationsIco} from "../../assets/img/svg";

const HeaderComponent = () => {
    return (
        <nav className={classes.header}>
            <form name="search" className={classes.searcher}>
                <label>
                    <SearchIco/>
                    <input type="text" placeholder="Поиск"/>
                </label>
            </form>
            <Link to="/" className={classes.logo}>
                <LogoIco/>
            </Link>
            <div className={classes.buttons}>
                <Link>
                    <MessagesIco/>
                </Link>
                <Link>
                    <NotificationsIco/>
                </Link>
                <Link>
                    <button className={classes.button}>Личный кабинет</button>
                </Link>
            </div>
        </nav>
    );
};

export default HeaderComponent;