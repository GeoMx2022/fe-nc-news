import { useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";

import { fetchTopicsTitles } from "../api/api";

import { v4 as uuidv4 } from "uuid";

export default function TopicsSelector() {
    const [topicTitleData, setTopicTitleData] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);
    const [topic, setTopic] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        fetchTopicsTitles().then(topicTitleData =>{
            setTopicTitleData(topicTitleData);
            setIsLoading(false)
        });
    }, []);

    return (
        <div>
          <div className="topicsSelector__div--dataFetching">
            {isLoading ? (
              <div className="topicsSelector__div--loading">
                <h2>Loading...</h2>
              </div>
            ) : (
              <div className="topicsSelector__div--map">
                {topicTitleData.map((topic) =>(
                    <button key={uuidv4()} onClick={() => {
                        navigate(`/topics/${topic.slug}`); 
                        setTopic(topic.slug);
                    }}>{topic.slug}</button>                  
                ))}
              </div>
           )}
          </div> 

            



        </div>
      )
    }
