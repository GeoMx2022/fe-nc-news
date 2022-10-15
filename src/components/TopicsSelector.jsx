import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { fetchTopicsTitles } from "../api/api";

import { v4 as uuidv4 } from "uuid";

import ErrorsPage from "../Error-handling/ErrorsPage";

export default function TopicsSelector() {
    const [topicTitleData, setTopicTitleData] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchTopicsTitles()
          .then((topicsTitleData) => {
            setTopicTitleData(topicsTitleData);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false)
            setError(err);
          });
    }, []);

    if (error) return <ErrorsPage errMsg={error.response.data.msg} />;    
    return (
        <div>
          <div className="topicsSelector__div--dataFetching">
            {isLoading ? (
              <div className="topicsSelector__div--loading">
                <h2>Loading...</h2>
              </div>
            ) : (
              <div>
                <div className="topicsSelector__div--map">
                  {topicTitleData.map((topic) =>(
                    <div key={uuidv4()}>
                      <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                    </div>      
                  ))}                
                </div>  
              </div>
            )}
          </div> 
        </div>
      )
    }
