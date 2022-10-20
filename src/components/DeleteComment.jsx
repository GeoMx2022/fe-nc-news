import styles from "../styling/DeleteComment.module.css";

import { useState } from "react";

import { deleteComment } from "../api/api"

import ErrorsPage from "../Error-handling/ErrorsPage";

export default function DeleteComment({commentId}) {
  const [disableBtn, setDisableBtn] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = (event) => {
    event.preventDefault();
    setError(null)
    setDisableBtn(true)
    deleteComment(commentId)
    .catch((err) => {
      setError(err);
      setDisableBtn(false)
    })
  }

  if (error) return <ErrorsPage errMsg={error.response.data.msg} />;    
  return (
    <div className={styles.deleteComment__div}>
      <button disabled={disableBtn} onClick={handleDelete} className={disableBtn === false ? styles.deleteComment__div__btn : styles.deleteComment__div__btn__disabled}>Delete</button>
      {disableBtn === true ? (
        <p className={styles.deleteComment__div__p}>Comment has been deleted</p>
      ) : <></>}
    </div>
  )
}
