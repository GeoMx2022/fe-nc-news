import Header from "../components/Header";
import UserLoginBox from "../components/UserLoginBox";
import Navigation from "../components/Navigation";
import ArticleList from "../components/ArticlesList";
import SortBy from "../components/SortBy";

export default function Articles() {
  return (
    <div className="articles__div">
      <Header />
      <UserLoginBox />
      <Navigation />
      <SortBy />
      <ArticleList />
    </div>
  )
}
