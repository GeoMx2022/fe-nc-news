import { useParams } from "react-router-dom";

import ArticleRender from "../components/ArticleRender";

export default function ArticleComments() {
  const {id} = useParams();

  return (
    <div className="articleComments__div">
      <ArticleRender id={id}/>
    </div>
  )
}
