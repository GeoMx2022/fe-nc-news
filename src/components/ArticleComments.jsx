import { useParams } from "react-router-dom"

import ArticleCommentsList from "./ArticleCommentsList";
import ArticleRender from "./ArticleRender"
import PostComment from "./PostComment"

export default function ArticleComments() {
  const {id} = useParams();

  return (
    <div>
      
      <div>
        <ArticleRender id={id}/>
      </div>
    
      <div className="articleCommentsRender__div">
        <ArticleCommentsList id={id}/>    
      </div>

      <div>
        <PostComment id={id} />
      </div>

    </div>
  )
}

