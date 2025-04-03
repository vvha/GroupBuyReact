import React from 'react';
import {Link} from "react-router-dom";
import classes from "./SideBar.module.scss";
import {FavoritesIco, GroupIco, StoreIco, FAQIco, HomeIco} from "../../assets/img/svg";

const SideBarComponent = () => {
    return (
        <nav className={classes.sidebar}>
            <ul className={classes.list}>
                <li>
                    <Link><HomeIco/></Link>
                    <p className={classes.description}>Главная</p>
                </li>
                <li>
                    <Link><StoreIco/></Link>
                    <p className={classes.description}>Каталог</p>
                </li>
                <li>
                    <Link><GroupIco/></Link>
                    <p className={classes.description}>Сообщество</p>
                </li>
                <li>
                    <Link><FAQIco/></Link>
                    <p className={classes.description}>FAQ</p>
                </li>
                <li>
                    <Link><FavoritesIco/></Link>
                    <p className={classes.description}>Избранное</p>
                </li>
            </ul>
        </nav>
    );
};

export default SideBarComponent;