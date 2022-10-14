import styles from "../styling/DeleteComment.module.css";

import { useState } from "react";

import { deleteComment } from "../api/api"

export default function DeleteComment({commentId}) {
  const [disableBtn, setDisableBtn] = useState(false);
  const [err, setErr] = useState(null);

  const handleDelete = (event) => {
    event.preventDefault();
    setErr(null)
    setDisableBtn(true)
    deleteComment(commentId).catch((err) => {
      setErr("Something went wrong. Try again");
      setDisableBtn(false)
    })
  }

  if (err) return <p>{err}</p>
  return (
    <div className={styles.deleteComment__div}>
      <button disabled={disableBtn} onClick={handleDelete}>Delete</button>
      {disableBtn === true ? (
        <p>Comment has been deleted</p>
      ) : <></>}
    </div>
  )
}
