import styles from "./styling/App.module.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { UserLoginContext } from "./contexts/UserLogin"

import Home from "./main-pages/Home";
import Articles from "./main-pages/Articles";
import Topics from "./main-pages/Topics";
import Comments from "./main-pages/Comments";
import ErrorsPage from './Error-handling/ErrorsPage';
import Header from "./components/Header";
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
        <div className={styles.app__div}>
          <Header />        
          <div className={styles.app__div__routes}>
            <Routes>
              <Route path="*" element={<ErrorsPage />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/articles" element={<Articles />}></Route> 
              <Route path="/topics" element={<Topics />}></Route>
              <Route path="/topics/:topic" element={<Articles />}></Route>
              <Route path="/articles/:id" element={<Article />}></Route>
              <Route path="/articles/:id/comments" element={<Comments />}></Route> 
            </Routes>
          </div>        
          <div className={styles.userLoginInfo__div}>
            <h3>Logged in as: </h3>
            <div>
              <img src={userLogin.avatar_url} alt="User avatar" />
              <p>{userLogin.username}</p>
            </div>
          </div>
        </div>
        </UserLoginContext.Provider>
    </BrowserRouter>
  );
}
