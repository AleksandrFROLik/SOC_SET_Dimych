import React from "react";
import s from './Post.module.css';

type MessageType = {
    message: string;
    likesCount: number;
}

export const Post:React.FC<MessageType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img className={s.image} src='http://ru.myanimeshelf.com//upload/dynamic/2013-09/20/2202712.jpg'
                     alt='avatar'/>
                { props.message }
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </div>
    )
}
