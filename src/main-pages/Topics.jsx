import styles from "../styling/Topics.module.css";

import TopicsSelector from "../components/TopicsSelector";
import SortBy from "../components/SortBy";

export default function Topics() {
  return (
    <div>
      <SortBy />
      <TopicsSelector />
    </div>
  )
}
