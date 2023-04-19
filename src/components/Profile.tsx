import React, {useEffect} from 'react';
import s from '../styles/Profile.module.scss';
import Container from './shared/Container';
import profile_bg from '../assets/png/profile_header_bg.png'
import { useAppDispatch, useTypedSelector } from '../hooks/store';
import { getProfile } from '../store/thunks/fetchProfile';

const Profile:React.FC = () => {

  const {profileData} = useTypedSelector((state) => state.profile);
  console.log(profileData);
  
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