import styles from "../styling/SortBy.module.css"

export default function SortBy({sortOption}) { 
      return (
      <div className={styles.sortBy__div}>
      <label>Sort By: </label>
      <select className={styles.sortBy__div__select} onChange={sortOption}>
        <option>--Select--</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="mostComments">Most Comments</option>
        <option value="leastComments">Least Comments</option>
        <option value="mostVotes">Most Votes</option>
        <option value="leastVotes">Least Votes</option>
      </select>
    </div>
  )
}
