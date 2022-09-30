import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';




function App(props) {

    return (
            <div className='app-wrapper'>
                <Header />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/users" element={<UsersContainer />} />
                    </Routes>
                </div>
            </div>
    );
}
export default App;
