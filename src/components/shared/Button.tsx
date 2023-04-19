import React from 'react';
import s from '../../styles/shared/Button.module.scss';

interface IButton {
    children: React.ReactNode;
    type: string;
    isWhite?: boolean;
}

const Button:React.FC <IButton> = ({children, type, isWhite}) => {
    switch(type) {
        case 'filled':
            return (
                <button className={isWhite ? s.filled + ' ' + s.white : s.filled}>
                    {children}
                </button>
            );
        case 'outlined':
            return (
                <button className={s.outlined}>
                    {children}
                </button>
            )
        default :
            return (
                <button className={isWhite ? s.filled + ' ' + s.white : s.filled}>
                    {children}
                </button>
            ) 
    }
}

export default Button;