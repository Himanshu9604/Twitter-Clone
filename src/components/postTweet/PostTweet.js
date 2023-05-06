import React, { useEffect, useState } from "react";
import styles from "./PostTweet.module.css";
import { Avatar, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PublicIcon from "@mui/icons-material/Public";
import CollectionsIcon from "@mui/icons-material/Collections";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {  AiOutlineAreaChart } from "react-icons/ai";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {  loggedUser, tweeData } from "../leftSideBar/tweetData"
import { useRecoilState } from "recoil";

export default function PostTweet() {
  // const tweet = useRecoilValue(tweeData);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [likeColor, setLikeColor] = useState("black");
  const [retweetColor, setRetweetColor] = useState("");
  const [tweetText, setTweetText] = useState("");
  const [tweetImage, setTweetImage] = useState(null);
  const [tweet, setTweets] = useRecoilState(tweeData);
  const [name, setName] = useRecoilState(loggedUser)
  
  function handleLikeCount() {
    if (likeColor === "black") {
      setLikeCount(1);
      setLikeColor("red");
    } else {
      setLikeCount(0);
      setLikeColor("black");
    }
  }

  function handleCommentCount() {
    if (retweetColor === "") {
      setCommentCount(1);
      setRetweetColor("blue")
    } else {
      setCommentCount(0);
      setRetweetColor("")
    }
  }

  const handleTweet = (event) => {
    event.preventDefault();
    const newTweet = {
      text: tweetText,
      image: tweetImage,
      time: new Date().toLocaleString(),
    };
    setTweets([newTweet, ...tweet]);
    setTweetText("");
    setTweetImage(null);
  };
  useEffect(() => {
    setName(JSON.parse(localStorage.getItem("loggedUser")));
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTweetImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
console.log(tweetImage)
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.postTweet}>
          <Avatar
            alt="Remy Sharp"
            className={styles.avatar}
            src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
          />
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "18px",
              width: "90px",
              borderRadius: "15px",
              transformStyle: "none",
              textTransform: "none",
              marginLeft: "28px",
              marginTop:"2rem"
            }}
          >
            Everyone
            <KeyboardArrowDownIcon />
          </Button>
        </div>
        <div className={styles.tweetInput}>
          <input
            type="text"
            value={tweetText}
            placeholder="What's happening"
            onChange={(event) => setTweetText(event.target.value)}
          />
        </div>
        <div className={styles.btn}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "18px",
              width: "190px",
              borderRadius: "15px",
              transformStyle: "none",
              textTransform: "none",
              border: "none",
              margin: "0px",
            }}
          >
            <PublicIcon sx={{ height: "15px" }} />
            Everyone can reply
          </Button>
        </div>

        <div className={styles.Btns}>
          <div className={styles.btn1}>
            <hr />
            <label htmlFor="fileInput">
              <CollectionsIcon
                sx={{
                  height: "20px",
                  width: "20px",
                  color: "#1DA1F2",
                  marginRight: "10px",
                  padding: "5px",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "lightskyblue",
                  },
                }}
              />
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <GifIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <PollIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <SentimentSatisfiedAltIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <DateRangeIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <LocationOnIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
          </div>
          <div className={styles.btn2}>
            <Button
              sx={{
                backgroundColor: "#1DA1F2",
                color: "White",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#0e8db7",
                },
              }}
              onClick={handleTweet}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.tweet}>
        {tweet.map((tweet, index) => (
          <div  className={styles.postTweetMainCard} key={index}>
            <div className={styles.teetInfo}>
              <Avatar
                alt="Remy Sharp"
                className={styles.avatar}
                src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
              />
              <h3 className={styles.h3}>{name}</h3>
              <small className={styles.p} >{tweet.time}</small>
            </div>
            <p className={styles.text}>{tweet.text}</p>
            <div className={styles.image}>
              {tweet.image && (
                <img className={styles.image} src={tweet.image} alt="Tweet" />
              )}
            </div>
            <div className={styles.tweetInfo}>
              <div className={styles.Like} onClick={handleLikeCount}>
                <FavoriteIcon style={{ color: likeColor }} />
                {likeCount}
              </div>
              <div className={styles.Retweet} onClick={handleCommentCount}>
                <BiRepost style={{ color: retweetColor }} />
                {commentCount}
              </div>
              <div className={styles.tweetBtn}>
                <BiMessageRounded />
                {0}
              </div>
              <div className={styles.tweetBtn}>
                <AiOutlineAreaChart />
              </div>
              <div className={styles.tweetBtn}>
                <FiDownload />
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* <div>
        {twee.map((twee,inde) => (
           <div className={styles.postTweetMainCard} key={inde}>
           <div className={styles.teetInfo}>
             <Avatar
               alt="Remy Sharp"
               className={styles.avatar}
               src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
             />
             <h3 className={styles.h3}>{name}</h3>
             <p className={styles.p} >{time}</p>
           </div>
           <p className={styles.text}>{twee.content}</p>
           <div className={styles.image}>
              {twee.image && (
                <img className={styles.image} src={twee.image} alt="Tweet" />
              )}
            </div>
           <div className={styles.tweetInfo}>
             <div className={styles.Like} onClick={handleLikeCount}>
               <FavoriteIcon style={{ color: likeColor }} />
               {likeCount}
             </div>
             <div className={styles.Retweet} onClick={handleCommentCount}>
               <BiRepost style={{ color: retweetColor }} />
               {commentCount}
             </div>
             <div className={styles.tweetBtn}>
               <BiMessageRounded />
               {0}
             </div>
             <div className={styles.tweetBtn}>
               <AiOutlineAreaChart />
             </div>
             <div className={styles.tweetBtn}>
               <FiDownload />
             </div>
           </div>
         </div>
        ))}
    </div> */}
    </div>
  );
}