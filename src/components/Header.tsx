import React from 'react';
import s from '../styles/Header.module.scss';
import logo from '../assets/svg/Group 686.svg';
import { NavLink } from "react-router-dom";
import Container from './shared/Container';
import Button from './shared/Button';

const Header:React.FC = () => {
  return (
    <div className={s.header}>
        <Container>
            <div className={s.header__content}>
                <div className={s.header__content__nav}>
                    <img src={logo} alt="logoImg" />
                    <NavLink to={'#'}><p>бронирование</p></NavLink>
                    <NavLink to={'#'}><p>турниры</p></NavLink>
                    <NavLink to={'#'}><p>сборные</p></NavLink>
                    <NavLink to={'#'}><p>магазин</p></NavLink>
                    <NavLink to={'#'}><p>услуги</p></NavLink>
                    <NavLink to={'#'}><p>о нас</p></NavLink>
                </div>
                <Button type='filled' isWhite>Вход</Button>
            </div>
        </Container>
    </div>
  );
}

export default Header;