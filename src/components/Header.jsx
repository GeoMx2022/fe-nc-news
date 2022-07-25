import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header__div">
      <h1>NC News</h1>
      <Link to="/"><img className ="logo" src="../../public/nc-news-logo.png" /></Link>
    </div>
  )
}
