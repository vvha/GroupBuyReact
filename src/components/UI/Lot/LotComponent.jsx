import React from 'react';
import classes from './Lot.module.scss';
import ProgressbarComponent from "../../UI/ProgressBar/ProgressbarComponent";
const LotComponent = (props) => {
    let {time, img, title, progress_max, progress_val, price, places} = props

    const progressPercentage = (progress_val / progress_max) * 100;

    // Правильное склонение слова "место"
    const getPlacesText = (count) => {
        if (count % 10 === 1 && count % 100 !== 11) return 'место';
        if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return 'места';
        return 'мест';
    };

    return (
        <div className={classes.lot_container}>
            <div className={classes.time}>{time}</div>
            <div className={classes.img_container}>
                <img src="" alt={img}/>
            </div>
            <div className={classes.info_container}>
                <p className={classes.title} id="name">{title}</p>
                <ProgressbarComponent progress={progressPercentage}/>

                <div className={classes.footer}>
                    <p className={classes.price}>{price} руб.</p>
                    <p className="places" id="places">{places} мест</p>
                </div>
            </div>
            <button className={classes.join_btn}>участвовать</button>
        </div>
    );
};

export default LotComponent;