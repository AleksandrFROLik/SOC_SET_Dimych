import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";


type propsTypeDialogItem = {
    id: number
    name: string
}

export const DialogItem: React.FC<propsTypeDialogItem> = ({id, name, ...props}: propsTypeDialogItem) => {
    let path = "/dialogs/" + id

    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

