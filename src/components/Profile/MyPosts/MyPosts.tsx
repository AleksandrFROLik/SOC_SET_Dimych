import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {postsType, RootActionType} from "../../../Redux/Redux";


type MyPostsType = {
    posts: Array<postsType>
    newPostText: string
    dispatch: (action:RootActionType) =>void

}

export const MyPosts = ({posts, newPostText, dispatch}:MyPostsType) => {
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        if(text) {
            dispatch({type:"UPDATE-NEW-POST-TEXT", newText: text});
        }
    }

    const addPost = ()=> {
        dispatch({type:"ADD-POST", postText: newPostText})
    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange }
                              value={newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>

    )
}
