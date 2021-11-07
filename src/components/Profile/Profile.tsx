import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType, RootActionType,} from "../../Redux/Redux";

type ProfileType = {
    profilePage: profilePageType
    dispatch: (action:RootActionType)=>void
}

export const Profile: React.FC<ProfileType> = ({profilePage, dispatch}:ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}
            />
        </div>
    )
}
