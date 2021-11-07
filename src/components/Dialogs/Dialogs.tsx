import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {storeType} from "../../Redux/Redux";

type DialogsType = {
    store: storeType
}


export const Dialogs: React.FC<DialogsType> = ({store}: DialogsType) => {
    let dialogsElements = store._state.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = store._state.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = store._state.dialogsPage.newMessageBody
    let onSendMessageClick = () => {
        store.dispatch({type:"SEND_MESSAGE",})
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        store.dispatch({type: "UPDATE_NEW_MESSAGE_BODY", body: e.currentTarget.value})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder="Enter new message"
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}