import styles from "../styling/Topics.module.css"

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { fetchTopicsTitles } from "../api/api";

import { v4 as uuidv4 } from "uuid";

import ErrorsPage from "../Error-handling/ErrorsPage";
import Navigation from "../components/Navigation";

export default function Topics() {
    const [topicTitleData, setTopicTitleData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

        useEffect(() => {
          fetchTopicsTitles()
            .then((topicsTitleData) => {
              setTopicTitleData(topicsTitleData);
              setIsLoading(false);
            })
            .catch((err) => {
              setIsLoading(false);
              setError(err);
            });
        }, []);

  if (error) return <ErrorsPage errMsg={error.response.data.msg} />;    
  return (
    <div>
      <Navigation />
      <div>
        {isLoading ? (
          <div className={styles.topics__div__loading}>
            <h2>Loading...</h2>
          </div>
        ) : (
          <div>
            <div className={styles.topics__div}>
              {topicTitleData.map((topic) => (
                <div key={uuidv4()}>
                  <Link to={`/topics/${topic.slug}`} className={styles.topics__div__link}>{topic.slug.slice(0, 1).toUpperCase() + topic.slug.substring(1)}</Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
