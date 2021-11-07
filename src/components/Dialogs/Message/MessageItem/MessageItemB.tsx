import React from "react";
import s from './MessageItemB.module.css'


type MessageItemBType = {
    message: string
}

export const MessageItemB: React.FC<MessageItemBType> = ({message}: MessageItemBType) => {
    return (

        <div className={s.dialog}>


            <div className={s.ugolok}/>
            <div className={s.messageArea}>
                <div>
                    <div className={s.name}>Frolik</div>
                </div>
                <div className={s.component}>
                    <div className={s.messageItem}>{message}</div>
                    <div className={s.time}>22.00</div>
                </div>

            </div>
            <div className={s.avatar}>
                <img className={s.pic}
                     src='https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                     alt='animal'/>
            </div>

        </div>

    )
}


