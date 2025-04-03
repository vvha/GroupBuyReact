import React from 'react';
import {Link} from "react-router-dom";
import classes from './HomeComponent.module.scss';
import LotComponent from "../UI/Lot/LotComponent";
const HomeComponent = () => {

    let lots = [
        {id: 1, time: 12, img: "img", title: "iphone", progress_max: 100, progress_val: 14, price: 122000, places: 18},
        {id: 2, time: 12, img: "img", title: "iphone", progress_max: 100, progress_val: 14, price: 122000, places: 18},
        {id: 3, time: 12, img: "img", title: "iphone", progress_max: 100, progress_val: 14, price: 122000, places: 18},
        {id: 4, time: 12, img: "img", title: "iphone", progress_max: 100, progress_val: 14, price: 122000, places: 18},

    ]

    return (
        <div className={classes.home_container}>
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



            </div>
        </div>
    );
};

export default HomeComponent;