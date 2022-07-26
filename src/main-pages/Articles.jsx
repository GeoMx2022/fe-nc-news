import styles from "../styling/Articles.module.css"

import Header from "../components/Header";
import UserLoginBox from "../components/UserLoginBox";
import Navigation from "../components/Navigation";
import ArticleList from "../components/ArticlesList";
import SortBy from "../components/SortBy";

export default function Articles() {
  return (
    <div className={styles.articles__div}>
      <Header id="header" />
      <UserLoginBox id="userLoginBox" />
      <Navigation id="navigation" />
      <SortBy id="sortBy" />
      <ArticleList id="articleList" />
    </div>
  )
}
