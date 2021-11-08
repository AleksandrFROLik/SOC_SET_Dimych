import {profilePageType, RootActionType} from "./Redux";

export const ProfilePageReducer = (state:profilePageType , action:RootActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;

        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            break;
    }
    return state
}
 export type mainProfilePageReducerType = AddPostACType | upDateNewPostTextACType


type upDateNewPostTextACType = ReturnType<typeof upDateNewPostTextAC>
export const  upDateNewPostTextAC= (newText: string) => {
    return{
        type: "UPDATE-NEW-POST-TEXT",
        newText
    }as const
}

type AddPostACType = ReturnType<typeof AddPostAC>
export const AddPostAC  = ( postText: string) => {
    return{
        type: "ADD-POST",
        postText
    }as const

}

// export type upDateNewPostTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT"
//     newText: string
// }
// export type AddPostActionType = {
//     type: "ADD-POST"
//     postText: string
// }

