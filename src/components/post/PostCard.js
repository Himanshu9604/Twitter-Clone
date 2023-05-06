import React, { useState } from "react";
import styles from "./PostCard.module.css";
import { AiFillHeart, AiOutlineAreaChart } from "react-icons/ai";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { Avatar } from "@mui/material";
import { isLogin } from "../../pages/Atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { usersAtom } from "../../recoil/UsersRecoil"


export default function PostCard(props) {
  const islogin = useRecoilValue(isLogin);
  const [likeCount, setLikeCount] = useState(props.tweet.likeCount);
  const [likeColor, setLikeColor] = useState("");
  const [retweetCount, setRetweetCount] = useState(props.tweet.reTweetsCount);
  const [retweetColor, setRetweetColor] = useState("");
  const tweet = props.tweet;
  const [users,setUsers] = useRecoilState(usersAtom)
  const handleLikeClick = () => {
    if (likeColor === "") {
      setLikeCount(likeCount + 1);
      setLikeColor("red");
    } else {
      setLikeCount(likeCount - 1);
      setLikeColor("");
    }
  };

  const handleRetweetClick = () => {
    if (retweetColor === "") {
      setRetweetCount(retweetCount + 1);
      setRetweetColor("blue");
    } else {
      setRetweetCount(retweetCount - 1);
      setRetweetColor("");
    }
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = tweet.image;
    link.click();
  }
  

  

  return (

    <>
    {
      !islogin ?
                <div className={styles.postContainer}>
                <div className={styles.userIndo}>
                  <Avatar className={styles.avatar} src={tweet.image} />
                    
                  <h3 className={styles.h3}>{tweet.tweetedBy.name}</h3>
                  <p className={styles.p}>{tweet.createdAt}</p>
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
                          <div className={styles.reachIcones}>
                <AiOutlineAreaChart />
              </div>
              <div className={styles.reachIcones} onClick={handleDownloadClick}>
                <FiDownload />
              </div>
                  </div>
                </div>
          :
                <div className={styles.postContainer}>
                  <div className={styles.userIndo}>
                    <Avatar className={styles.avatar}  src={tweet.image} />
                      
                    <h3 className={styles.h3}>{tweet.tweetedBy.name}</h3>
                    <p className={styles.p}>{tweet.createdAt}</p>
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
                    <div className={styles.reachIcones}>
                <AiOutlineAreaChart />
              </div>
              <div className={styles.reachIcones} onClick={handleDownloadClick}>
                <FiDownload />
              </div>
                  </div>
                </div>
  }
    </>
  );
}