import styles from "../styling/Topics.module.css";

import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import UserLoginBox from "../components/UserLoginBox";
import Navigation from "../components/Navigation";
import TopicsSelector from "../components/TopicsSelector";
import SortBy from "../components/SortBy";

export default function Topics() {
  return (
    <div>
      <Header />
      <UserLoginBox />
      <Navigation />
      <SortBy />
      <TopicsSelector />
      <Outlet />
    </div>
  )
}
