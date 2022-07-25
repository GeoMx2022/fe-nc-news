import './styling/App.css';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./main-pages/Home";
import Login from "./main-pages/Login";
import Articles from "./main-pages/Articles";
import Topics from "./main-pages/Topics";
import ArticleComments from "./main-pages/ArticleComments";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app__div">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/articles" element={<Articles />}>
            <Route path="topics" element={<Topics />}></Route>
            <Route path="article_comments" element={<ArticleComments />}></Route>
          </Route>
        </Routes>
      </div>
  </BrowserRouter>
  );
}
