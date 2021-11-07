import React from "react";
import s from './Message.module.css'
import {MessageItemA} from "./MessageItem/MessageItemA";
import {MessageItemB} from "./MessageItem/MessageItemB";


type MessageType = {
    message: string
}

export const Message: React.FC<MessageType> = ({message}: MessageType) => {
    return (
        <div>
            <div className={s.messageMain}>
                <MessageItemA message={message}/>
                <MessageItemB message={message}/>
            </div>
            {/*    <textarea></textarea>*/}
            {/*<div>*/}
            {/*    <button>Add Message</button>*/}
            {/*</div>*/}
        </div>
    )
}


