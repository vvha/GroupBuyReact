import React from 'react';
import {Link} from "react-router-dom";
import classes from './HomeComponent.module.scss';
import LotComponent from "../UI/Lot/LotComponent";
import {PlusIco} from "../../assets/img/svg/index";
const HomeComponent = () => {

    let lots = [
        {id: 1, time: 12, img: "img", title: "iphone", progress_max: 100, progress_val: 14, price: 122000, places: 18},
        {id: 2, time: 12, img: "img", title: "iphone", progress_max: 100, progress_val: 14, price: 122000, places: 18},
        {id: 3, time: 12, img: "img", title: "iphone", progress_max: 100, progress_val: 14, price: 122000, places: 18},
        {id: 4, time: 12, img: "img", title: "iphone", progress_max: 100, progress_val: 14, price: 122000, places: 18},

    ]

    return (
    <div className={classes.home_container}>
        <div className={classes.bg}></div>
        <div className={classes.banner_section}>
            <div className={classes.banner}>
                <div className={classes.manifest}>
                    <h1>Покупать дешевле <span>вместе!</span></h1>
                    <h3>Платформа для удобных и быстрых совместных покупок.</h3>
                    <Link><button className={classes.button}>К покупкам</button></Link>
                </div>
                <div className={classes.img_container}>
                    <img src={require("src/assets/img/png/banner.png")} alt="hello"/>
                </div>
            </div>
        </div>

        <div className={classes.popular_lots_container}>
            <h1 className={classes.popular_lots_title}>Популярные лоты</h1>
            <div className={classes.lots_wrapper}>
                <button>См. подробнее</button>
                {lots.map((lot)=>
                    <LotComponent {...lot} key={lot.id}/>
                )}
            </div>
        </div>
        <div className={classes.benefits_container}>
            <h1 className={classes.benefits_title}>Преимущества GROUP<span>BUY</span></h1>
            <div className={classes.benefits_wrapper}>
                <div className={classes.benefit}>
                    <img src={require("src/assets/img/png/shield.png")} alt="hello"/>
                    <h4>Проверенный сервис</h4>
                    <p>Сервис позволяет экономить на покупках, выставляя оптовую цену в совместных покупках</p>
                    <a href="#">узнать подробнее</a>
                </div>
                <div className={classes.benefit}>
                    <img src={require("src/assets/img/png/shopping bag.png")} alt="hello"/>
                    <h4>Уникальные товары</h4>
                    <p>Сервис позволяет экономить на покупках, выставляя оптовую цену в совместных покупках</p>
                    <a href="#">узнать подробнее</a>
                </div>
                <div className={classes.benefit}>
                    <img src={require("src/assets/img/png/shield.png")} alt="hello"/>
                    <h4>Проверенный сервис</h4>
                    <p>Сервис позволяет экономить на покупках, выставляя оптовую цену в совместных покупках</p>
                    <a href="#">узнать подробнее</a>
                </div>
                <div className={classes.benefit}>
                    <img src={require("src/assets/img/png/money.png")} alt="hello"/>
                    <h4>Экономия на покупках</h4>
                    <p>Сервис позволяет экономить на покупках, выставляя оптовую цену в совместных покупках</p>
                    <a href="#">узнать подробнее</a>
                </div>
            </div>
        </div>
        <div className={classes.faq_container}>
            <h1 className={classes.faq_title}>часто задаваемые вопросы</h1>
            <div className={classes.question_wrapper}>
                <div className={classes.question}><p>Что такое совместная покупка?</p><button><PlusIco/></button></div>
                <div className={classes.question}><p>Что такое совместная покупка?</p><button><PlusIco/></button></div>
                <div className={classes.question}><p>Что такое совместная покупка?</p><button><PlusIco/></button></div>
                <div className={classes.question}><p>Что такое совместная покупка?</p><button><PlusIco/></button></div>
            </div>

        </div>
        <div className={classes.contact_container}>
            <div className={classes.form_wrapper}>
                <h1 className={classes.contact_title}>Остались вопросы?</h1>
                <p className={classes.contact_description}>Оставьте свои данные и мы с вами свяжемся!</p>
                <form className={classes.contact_form} action="">
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="text" placeholder="Ваш номер телефона"/>
                    <button>оставить заявку</button>
                </form>
            </div>
            <img src={require('src/assets/img/png/Email_form_ico.png')} alt=""/>
        </div>
        <div className={classes.bg_bottom}></div>
    </div>
);
};

export default HomeComponent;
