import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from "./components/Dialogs/DialogsContainer";




function App(props) {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar state = {props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>} />
                        <Route path="/profile" element={<Profile  store={props.store}/>} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </div>
            </div>
    );
}
export default App;
