import React from 'react';
import "./Button.scss"

interface IProps{
    children: any
    onClick:()=>void
}
export const Button:React.FC<IProps> = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className="tg-button">{props.children}</button>
        </div>
    );
};

