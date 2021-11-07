import React from "react";
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {BrowserRouter, Route} from "react-router-dom";
import {RootActionType, storeType} from "./Redux/Redux";
import {Friends} from "./components/Friends/Friends";


type propsTypeApp = {
    store: storeType
    dispatch:(action:RootActionType)=>void
}

export const App: React.FC<propsTypeApp> = ({store, dispatch}: propsTypeApp) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <AppHeader/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs store={store}/>}/>
                    <Route path='/profile' render={()=><Profile profilePage={store._state.profilePage}
                                                                dispatch={dispatch}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Setting}/>
                    <Route path='/friends' component={Friends}/>

                </div>
            </div>
        </BrowserRouter>
    );
}








