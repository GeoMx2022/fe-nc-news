import styles from "../styling/Topics.module.css";

import Header from "../components/Header";
import UserLoginBox from "../components/UserLoginBox";
import Navigation from "../components/Navigation";
import TopicsList from "../components/TopicsList";
import SortBy from "../components/SortBy";

export default function Topics() {
  return (
    <div>
      <Header />
      <UserLoginBox />
      <Navigation />
      <SortBy />
      <TopicsSelector />
    </div>
  )
}
