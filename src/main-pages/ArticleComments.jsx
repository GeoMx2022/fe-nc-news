import { useParams } from "react-router-dom";

import SortBy from "../components/SortBy";
import ArticleRender from "../components/ArticleRender";

export default function ArticleComments() {
  const {id} = useParams();

  return (
    <div className="articleComments__div">
      <SortBy />
      <ArticleRender id={id}/>
    </div>
  )
}
