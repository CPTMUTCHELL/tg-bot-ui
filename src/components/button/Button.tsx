import React from 'react';
import "./Button.scss"

interface IProps{
    children: any
    onClick?:()=>void
    type?: 'button'|'submit'
}
export const Button:React.FC<IProps> = (props) => {
    return (
        <div>
            <button {...props} type={props.type?? "button"} onClick={props.onClick} className="tg-button">{props.children}</button>
        </div>
    );
};

