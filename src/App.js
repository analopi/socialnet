import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';




function App(props) {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar data = {props.data.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs data = {props.data.messagesPage} dispatch = {props.dispatch}/>} />
                        <Route path="/profile" element={<Profile  data = {props.data.profilePage} dispatch = {props.dispatch}/>} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </div>
            </div>
    );
}
export default App;
