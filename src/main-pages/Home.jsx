import { Link } from "react-router-dom";

import Header from "../components/Header";
import UserLoginBox from "../components/UserLoginBox";

export default function Home() {
  return (
    <div className="home__div">
        <Header />
        <UserLoginBox />
        <Link to="articles">Click to Start</Link> 
    </div>
  )
}
