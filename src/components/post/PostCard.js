import React, { useState } from "react";
import styles from "./PostCard.module.css";
import { AiFillHeart } from "react-icons/ai";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { Avatar } from "@mui/material";
import { isLogin } from "../../pages/Atom";
import { useRecoilValue } from "recoil";
import { Link, Navigate } from "react-router-dom";


export default function PostCard(props) {
  const islogin = useRecoilValue(isLogin);
  const [likeCount, setLikeCount] = useState(props.tweet.likeCount);
  const [likeColor, setLikeColor] = useState("black");
  const [retweetCount, setRetweetCount] = useState(props.tweet.reTweetsCount);
  const [retweetColor, setRetweetColor] = useState("black");
  const tweet = props.tweet;

  const handleLikeClick = () => {
    if (likeColor === "black") {
      setLikeCount(likeCount + 1);
      setLikeColor("red");
    } else {
      setLikeCount(likeCount - 1);
      setLikeColor("black");
    }
  };

  const handleRetweetClick = () => {
    if (retweetColor === "black") {
      setRetweetCount(retweetCount + 1);
      setRetweetColor("blue");
    } else {
      setRetweetCount(retweetCount - 1);
      setRetweetColor("black");
    }
  };

  

  return (

    <>
    {
      !islogin ?
                <div className={styles.postContainer}>
                <div className={styles.userIndo}>
                  <Avatar src="https://i.pravatar.cc" />
                    
                  <h3>{tweet.tweetedBy.name}</h3>
                  <p>{tweet.createdAt}</p>
                </div>
                <p className={styles.text}>{tweet.content}</p>
                <img className={styles.image} src={tweet.image} alt="" />
                <div className={styles.reach}>
                    <div className={styles.reachIcones} >
                    <Link  to="/"> <AiFillHeart color={likeColor} /></Link>
                      {likeCount}
                    </div>
                    <div className={styles.reachIcones} >
                    <Link  to="/"> <BiRepost style={{ color: retweetColor }} /></Link>
                      {retweetCount}
                    </div>
                    <div className={styles.reachIcones}>
                    <Link  to="/"> <BiMessageRounded /></Link>
                      {tweet.commentCount}
                    </div>
                  </div>
                </div>
          :
                <div className={styles.postContainer}>
                  <div className={styles.userIndo}>
                    <Avatar src="https://i.pravatar.cc" />
                      
                    <h3>{tweet.tweetedBy.name}</h3>
                    <p>{tweet.createdAt}</p>
                  </div>
                  <p className={styles.text}>{tweet.content}</p>
                  <img className={styles.image} src={tweet.image} alt="" />
                  <div className={styles.reach}>
                    <div className={styles.reachIcones} onClick={handleLikeClick}>
                      <AiFillHeart color={likeColor} />
                      {likeCount}
                    </div>
                    <div className={styles.reachIcones} onClick={handleRetweetClick}>
                      <BiRepost style={{ color: retweetColor }} />
                      {retweetCount}
                    </div>
                    <div className={styles.reachIcones}>
                      <BiMessageRounded />
                      {tweet.commentCount}
                    </div>
                  </div>
                </div>
  }
    </>
  );
}