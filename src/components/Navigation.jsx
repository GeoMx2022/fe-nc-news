import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation__div">
      <Link to="/articles">Articles</Link> 
      <Link to="/topics">Topics</Link> 
      <Outlet />
    </div>
  )
}
