import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <>
            <div className={s.profile}>
                <img className={s.picture}
                    src='https://kidpassage.com/images/activity/plyazh-golubaya-laguna-olyudeniz/golubaya-laguna-plyazh_1076377393.jpg'
                    alt='laguna'/>
            </div>
            <div>
                ava + description
            </div>
        </>
    )
}
