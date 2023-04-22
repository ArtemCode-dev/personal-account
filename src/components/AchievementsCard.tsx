import React, { useState } from 'react';
import s from '../styles/AchievementsCard.module.scss';
import { IAchievements } from '../types/profile.types';
import background_img from '../assets/png/achievementsBackGround.png';
import ach1 from '../assets/svg/ach1.svg';

interface IAchievementsCard {
    item: IAchievements
}

//переписать на classnames

const AchievementsCard:React.FC <IAchievementsCard> = ({item}) => {
    const [isImgDisplay, setImgDisplay] = useState(true)

    return (
        <div className={s.achievements} onMouseOver={() => setImgDisplay(false)} onMouseOut={() => setImgDisplay(true)}>
            <div className={s.achievements__content}>
                {/* картинки ачивок по идеи тоже должны прилетать в запросе, но у меня нет на них ссылок, по этому svg беру из папки
                <img src={item.img} alt="img" />
                */}
                {/* {isImgDisplay ? <img className={s.achievements__content__img } src={ach1} alt="img" /> : <p className={s.achievements__content__description}>{item.description}</p>} */}
                <div className={isImgDisplay ? s.achievements__content__img : s.achievements__content__img__false}><img src={ach1} alt="img" /></div>
                <p className={isImgDisplay ? s.achievements__content__description : s.achievements__content__description__false}>{item.description}</p>
                <p>{item.name}</p>
            </div>
            <div className={s.achievements__linear}></div>
            <img className={s.achievements__background_img} src={background_img} alt="background_img" />
        </div>
    )
}

export default AchievementsCard;