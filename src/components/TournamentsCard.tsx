import React from 'react';
import s from '../styles/TournamentsCard.module.scss';
import { ITorunaments } from '../types/profile.types';

interface ITournamentsCard {
    item: ITorunaments
}

//переписать на classnames

const TournamentsCard:React.FC <ITournamentsCard> = ({item}) => {
    return (
        <div className={s.tournaments}>
            <div className={s.tournaments__card}>
                <div className={s.tournaments__card__name}>
                    {item.name}
                </div>
                <div className={s.tournaments__card__status}>
                    {item.status}
                </div>
                <div className={s.tournaments__card__date}>
                    {item.date}
                </div>
            </div>
            <img className={s.tournaments__img} src={item.img} alt="img" />
        </div>
    )
}

export default TournamentsCard;