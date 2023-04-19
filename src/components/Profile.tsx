import React from 'react';
import s from '../styles/Profile.module.scss';
import Container from './shared/Container';

const Profile:React.FC = () => {
  return (
    <div className={s.profile}>
        <Container>
            <div className={s.profile__content}>
                <div className={s.profile__content__info}>
                
                </div>
                <div className={s.profile__content__container}>
                    <div className={s.profile__content__container__row}></div>
                    <div className={s.profile__content__container__row}></div>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Profile;