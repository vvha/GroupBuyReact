import React from 'react';
import {Link} from "react-router-dom";
import {LogoIco, InstagramIco, TelegramIco, WhatsappIco} from "../../assets/img/svg";
import classes from "./Footer.module.scss";


const FooterComponent = () => {
    return (
        <footer>
            <ul className={classes.links}>
                <li><LogoIco/></li>
                <li><a href="#"><InstagramIco/></a></li>
                <li><a href="#"><TelegramIco/></a></li>
                <li><a href="#"><WhatsappIco/></a></li>
            </ul>
            <div className={classes.links_list_container}>
                <ul>
                    <li>Компания</li>
                    <li><Link>О нас</Link></li>
                    <li><Link>Контакты</Link></li>
                </ul>
                <ul>
                    <li>продавцам и партнерам</li>
                    <li><Link>Создать лот</Link></li>
                    <li><Link>Участие в закупке</Link></li>
                </ul>
                <ul>
                    <li>покупателям</li>
                    <li><Link>Вопросы и ответы</Link></li>
                    <li><Link>Юридическая информация</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default FooterComponent;