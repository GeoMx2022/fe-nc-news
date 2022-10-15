import './styling/App.css';
import "./styling/Navigation.module.css";
import "./styling/Header.module.css"
import "./styling/Articles.module.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { UserLoginContext } from "./contexts/UserLogin"

import Home from "./main-pages/Home";
import Login from "./main-pages/Login";
import Articles from "./main-pages/Articles";
import Topics from "./main-pages/Topics";
import ArticleComments from "./components/ArticleComments";
import ErrorsPage from './Error-handling/ErrorsPage';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./main-pages/Article";

export default function App() {
  const [userLogin, setUserLogin] = useState({
    "username": "tickle122",
    "name": "Tom Tickle",
    "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
  });

  return (
    <BrowserRouter>
      <UserLoginContext.Provider value={{userLogin, setUserLogin}}>
        <div className="app__div">
          <div className="userLoginBox__div">
          <img className="avatar" src={userLogin.avatar_url} alt="User avatar" />
          <h3>{userLogin.username}</h3>
        </div>
          <Header className="app__div--header"/>
          <Navigation className="app__div--navigation"/>
          <Routes>
            <Route path="*" element={<ErrorsPage />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/articles" element={<Articles />}></Route> 
            <Route path="/topics" element={<Topics />}></Route>
            <Route path="/topics/:topic" element={<Articles />}></Route>
            <Route path="/articles/:id" element={<Article />}></Route>
            <Route path="/articles/:id/comments" element={<ArticleComments />}></Route> 
          </Routes>
        </div>
        </UserLoginContext.Provider>
    </BrowserRouter>
  );
}
