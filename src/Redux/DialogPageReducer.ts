import {dialogsPageType, RootActionType} from "./Redux";

export const DialogPageReducer = (state: dialogsPageType, action: RootActionType) => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.body;
            break;
        case "SEND_MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            break;
    }
    return state
}

export type mainDialogPageReducerType = upDateNewMessageBodyACType | sendMessageACType

type upDateNewMessageBodyACType = ReturnType<typeof upDateNewMessageBodyAC>

export const upDateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        body
    } as const
}

type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: "SEND_MESSAGE"
    } as const
}

