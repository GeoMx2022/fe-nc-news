import './styling/App.css';
import "./styling/Navigation.module.css";
import "./styling/UserLoginBox.module.css";
import "./styling/Header.module.css"
import "./styling/Articles.module.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./main-pages/Home";
import Login from "./main-pages/Login";
import Articles from "./main-pages/Articles";
import Topics from "./main-pages/Topics";
import ArticleComments from "./main-pages/ArticleComments";
import ErrorsPage from './Error-handling/ErrorsPage';
import ArticlesByTopic from "./components/ArticlesByTopic"
import Header from "./components/Header";
import UserLoginBox from "./components/UserLoginBox";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app__div">
        <Header className="app__div--header"/>
        <UserLoginBox className="app__div--userLoginBox"/>
        <Navigation className="app__div--navigation"/>
        <Routes>
          <Route path="*" element={<ErrorsPage />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/articles" element={<Articles />}></Route> 
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/topics/:topic" element={<ArticlesByTopic />}></Route>
          <Route path="/articles/:id" element={<ArticleComments />}></Route> 
        </Routes>
      </div>
  </BrowserRouter>
  );
}
