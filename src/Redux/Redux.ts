import {mainProfilePageReducerType, ProfilePageReducer} from "./ProfilePageReducer";
import {DialogPageReducer, mainDialogPageReducerType} from "./DialogPageReducer";
import {SidebarReducer} from "./SidebarReducer";

export type RootActionType = mainProfilePageReducerType |
    mainDialogPageReducerType

type messagesType = {
    id: number
    message: string
}
type dialogsType = {
    id: number
    name: string
}
export type postsType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessageBody: string
}
export type profilePageType = {
    posts: Array<postsType>
    newPostText: string
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: {}
}

export type storeType = {
    _state: stateType
    _callSubscriber: (_state: stateType) => void
    getState: () => stateType
    subscribe: (observer: () => void) => void
    dispatch: (action: RootActionType) => void
}

const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    dispatch(action) {

        this._state.profilePage =  ProfilePageReducer( this._state.profilePage,  action)
        this._state.dialogsPage = DialogPageReducer( this._state.dialogsPage, action)
        this._state.sidebar = SidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);

    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },


}




export default store;

