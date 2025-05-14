import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.scss';

import {
    HomeIco,
    StoreIco,
    GroupIco,
    FAQIco,
    FavoritesIco
} from '../../assets/img/svg';

const navTop = [
    { to: '/', icon: <HomeIco />, name: 'Home' },
    { to: '/store', icon: <StoreIco />, name: 'Store' },
    { to: '/community', icon: <GroupIco />, name: 'Community' },
    { to: '/faq', icon: <FAQIco />, name: 'FAQ' },
];

const navBottom = [
    { to: '/favorites', icon: <FavoritesIco />, name: 'Favorites' },
];

const SideBarComponent = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.wrapper}>
                <div className={classes.top}>
                    {navTop.map(({ to, icon, name }) => (
                        <NavLink
                            key={name}
                            to={to}
                            className={({ isActive }) =>
                                isActive ? `${classes.icon} ${classes.active}` : classes.icon
                            }
                        >
                            <span className={classes.marker}></span>
                            {icon}
                        </NavLink>
                    ))}
                </div>
                <div className={classes.bottom}>
                    {navBottom.map(({ to, icon, name }) => (
                        <NavLink
                            key={name}
                            to={to}
                            className={({ isActive }) =>
                                isActive ? `${classes.icon} ${classes.active}` : classes.icon
                            }
                        >
                            <span className={classes.marker}></span>
                            {icon}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideBarComponent;
