import React from 'react';
import classes from "./ProgressBar.module.scss";

const ProgressbarComponent = ({ progress }) => {

    return (
        <div className={classes.progress_bar}>
            <div className={classes.progress}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressbarComponent;