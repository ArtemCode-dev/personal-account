import React, {useEffect} from 'react';
import s from '../styles/Profile.module.scss';
import Container from './shared/Container';
import profile_bg from '../assets/png/profile_header_bg.png'
import { useAppDispatch, useTypedSelector } from '../hooks/store';
import { getProfile } from '../store/thunks/fetchProfile';
import vkSvg from '../assets/svg/vk.svg';
import discordSvg from '../assets/svg/dis.svg';
import steamSvg from '../assets/svg/steam 1.svg';
import Button from './shared/Button';
import settingsSvg from '../assets/svg/settings.svg'
import SliderContainer from './shared/SliderContainer';
import ReservationCard from './ReservationCard';
import TournamentsCard from './TournamentsCard';
import AchievementsCard from './AchievementsCard';

const Profile:React.FC = () => {

  const {profileData} = useTypedSelector((state) => state.profile);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile('profile'))
  }, [])

  return (
    <div className={s.profile}>
        <Container>
            <div className={s.profile__content}>
                <img className={s.profile__content__bg_img} src={profile_bg} alt="profile_bg" />
                <div className={s.profile__content__info}>
                  <div className={s.profile__content__info__icon}>
                    <img className={s.profile__content__info__icon__img} src={profileData.info.icon} alt="profile_icon" />
                    <div className={s.profile__content__info__icon__status}>
                      <div className={profileData.info.status ? s.profile__content__info__icon__status__indicator__online : s.profile__content__info__icon__status__indicator__offline}></div>
                      <p>{profileData.info.status ? 'в сети' : 'не в сети'}</p>
                    </div>
                  </div>
                  <div className={s.profile__content__info__social}>
                    <div className={s.profile__content__info__social__profile_name}>
                      <h1>{profileData.info.name}</h1>
                      <span>{profileData.info.tag}</span>
                    </div>
                    <div className={s.profile__content__info__social__full_name}>
                      {profileData.info.full_name}
                    </div>
                    <ul className={s.profile__content__info__social__media}>
                      <li><img src={discordSvg} alt="discordSvg" /> {profileData.info.social_media.discord}</li>
                      <li><img src={steamSvg} alt="steamSvg" /> {profileData.info.social_media.steam}</li>
                      <li><img src={vkSvg} alt="vkSvg" /> {profileData.info.social_media.vk}</li>
                    </ul>
                    <div className={s.profile__content__info__social__settings}>
                      <Button type='outlined'>настройки</Button>
                      <Button type='filled'>админ</Button>
                    </div>
                  </div>
                  <div className={s.profile__content__info__user_info}>
                    <h2>Информация о пользователе:</h2>
                    <p>Учебная группа: <span>{profileData.info.study_group}</span></p>
                    <p>Номер студенческого: <span>{profileData.info.student_number}</span></p>
                    <p>Номер телефона: <span>{profileData.info.phone_number}</span></p>
                  </div>
                </div>
                <div className={s.profile__content__container}>
                    <div className={s.profile__content__container__row}>
                      <div className={s.profile__content__container__reservation}>
                        <h2 className={s.profile__content__container__reservation__title}>Бронирование</h2>
                        {/* 
                          можно обработать странность react-slick, когда кол во слайдов не совпадает с значением slidesToShow,
                          слайды начинают дублироваться для соответствия значению
                        */}
                        <SliderContainer slidesToShow={profileData.reservation.length > 2 ? 3 : 1}>
                          {profileData.reservation.map((item) => <ReservationCard item={item}/>)}
                        </SliderContainer>
                      </div>
                      <div className={s.profile__content__container__tournaments}>
                        <div className={s.profile__content__container__tournaments__header}>
                          <h2 className={s.profile__content__container__title}>Турниры</h2>
                          <img src={settingsSvg} alt="settingsSvg" />
                        </div>
                        <SliderContainer slidesToShow={profileData.tournaments.length > 2 ? 3 : 1}>
                          {profileData.tournaments.map((item) => <TournamentsCard item={item}/>)}
                        </SliderContainer>
                      </div>
                    </div>
                    <div className={s.profile__content__container__row}>
                      <div className={s.profile__content__container__teams}>

                      </div>
                      <div className={s.profile__content__container__achievements}>
                          <div className={s.profile__content__container__achievements__title}>
                            <h2>
                              Достижения:
                            </h2>
                            <h2>
                              {profileData.achievements.length}
                            </h2>
                          </div>
                          <SliderContainer slidesToShow={profileData.achievements.length > 2 ? 3 : 1}>
                            {profileData.achievements.map((item) => <AchievementsCard item={item}/>)}
                          </SliderContainer>
                      </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Profile;