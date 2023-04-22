import React from 'react';
import s from '../styles/ReservationCard.module.scss';
import Button from './shared/Button';
import { IReservation } from '../types/profile.types';

interface IReservationCard {
    item: IReservation
}

//переписать на classnames

const ReservationCard:React.FC <IReservationCard> = ({item}) => {
    return (
        <div className={s.reservation}>
            <div className={s.reservation__card}>
                <div className={s.reservation__card__date}>
                    {item.date}
                </div>
                <div className={s.reservation__card__under_line}>
                    
                </div>
                <div className={s.reservation__card__description}>
                    {item.name}
                </div>
                <div className={s.reservation__card__pc_name}>
                    {item.pc_num}
                </div>
                <div className={s.reservation__card__time}>
                    {item.time}
                </div>
            </div>
            <Button type='filled'>Отменить</Button>
        </div>
    )
}

export default ReservationCard;