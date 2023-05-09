import React from "react";
import { useState } from "react";
import style from "./TrendingBar.module.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Dialog2 from "./Dialog";


const Trends = () => {
  const [isNotIntrested, setIsNotIntrested] = useState([
    {
      id: 1,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Ms Dhoni",
      totalKeywords: "8000k Tweets",
    },
    {
      id: 2,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k Tweets",
    },
    {
      id: 3,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#RohitSharma",
      totalKeywords: "2560k Tweets",
    },
    {
      id: 4,
      isNotIntrested: true,
      country: "Trending in Sports",
      keyword: "#ViratKohli",
      totalKeywords: "2000k Tweets",
    },
    {
      id: 5,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#sachin",
      totalKeywords: "2000k Tweets",
    },
    {
      id: 6,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k Tweets",
    },
  
  
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const [trending , setTrendings] = useState(isNotIntrested)
  const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(true);
  const updateId = (id) => setSelectedId(id);
  const [data, setData] = useState([...trending]);
  const [show,setShow]= useState(3)

  const HandleClick = () => {
    const tempArr = [];
    trending.forEach((el) => {
      if (el.id !== selectedId) {
        tempArr.push(el);
      }
    });
    setTrendings(tempArr);
    setData(tempArr);
  };

 
  const handleShow=()=>{
    if(isShowingAllTrendings){
      setShow(show+3);
      setIsShowingAllTrendings(false)
    }
    else{
      setShow(show-3);
      setIsShowingAllTrendings(true)
    }
    
   
  }

  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div className={style.keyword__heading}>
          <h4 className={style.heading4}>What's happening</h4>
        </div>
        {trending.slice(0,show).map((keyword) => {
          return (
            <div
              key={keyword.id}
              className={style.container}
              onClick={() => {
                updateId(keyword.id);
              }}
            >
              <div key={keyword.id}>
                <div className={style.country}>{keyword.country}</div>
                <div className={style.keyword__name}>
                  <strong>{keyword.keyword}</strong>
                </div>
                <div className={style.keyword__tweets}>
                  {keyword.totalKeywords}
                </div>
              </div>
              <div className={style.btn1}>
                <Dialog2
                  onClick={HandleClick}
                  title={
                    <div>
                      <SentimentVeryDissatisfiedIcon /> This trend is harmful or
                      spammy
                    </div>
                  }
                  content={
                    <p className={style.p1}>
                      <SentimentVeryDissatisfiedIcon />
                      IsnotIntrested
                    </p>
                  }
                />
              </div>
            </div>
          );
        })}
         <h4  className={style.btn2} onClick={handleShow}>{isShowingAllTrendings ? "show More" :"show Less" }</h4>
        <div>
         
        </div>
      </div>
    </div>
  );
};

export default Trends;