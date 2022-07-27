import './styling/App.css';

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
        <Header />
        <UserLoginBox />
        <Navigation />
        <Routes>
          <Route path="*" element={<ErrorsPage />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/topics/:topic" element={<ArticlesByTopic />}></Route>
          <Route path="/articles" element={<Articles />}></Route>          
        </Routes>
      </div>
  </BrowserRouter>
  );
}
