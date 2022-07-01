import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg' />
            </div>
            <div className={s.desc_block}>
                ava +descp
            </div>
        </div>
    )
}

export default ProfileInfo