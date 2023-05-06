
import  PopupState from "material-ui-popup-state";

import styles from "./LeftSideBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Dialog, Popover, useMediaQuery } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Avatar } from "antd";
import { isLogin } from "../../pages/Atom";
import {  loggedUser, tweeData } from "../leftSideBar/tweetData"
import { useRecoilState, useSetRecoilState } from "recoil";
import React, {  useState } from "react";
import { bindPopover, bindTrigger } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PublicIcon from "@mui/icons-material/Public";
import CollectionsIcon from "@mui/icons-material/Collections";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LeftSideBar = () => {
  const isViewportBelow700 = useMediaQuery('(max-width:700px)');
  const [name, setName] = useRecoilState(loggedUser)
  const setisLogin = useSetRecoilState(isLogin);
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [logOutopen, setlogOutopen] = React.useState(false);
  const handlelogOutOpen = () => setlogOutopen(true);
  const handlelogOutClose = () => setlogOutopen(false);
  // let nam = JSON.parse(localStorage.getItem("name"));
  // let names = nam.name;
  let Navigate=useNavigate()
  function handleLogout() {
    setisLogin(false);
    Navigate("/")
    
  }
  return (
<>
{ isViewportBelow700  ?

<div className={styles.sidebar}>
<ul className={styles.options}>
<TwitterIcon  className={styles.option} sx={{ color: "#42a5f5", fontSize: "3rem" }} />
  <li className={styles.option}>
    <HomeIcon sx={{ fontSize:35,marginRight:2 }}/>
   
  </li>
  <li className={styles.option}>
    <TagIcon sx={{ fontSize:35,marginRight:2 }}/>
    
  </li>
  <li className={styles.option}>
    <NotificationsNoneIcon sx={{ fontSize:35,marginRight:2 }}/>
   
  </li>
  <li className={styles.option}>
    <MailOutlineIcon sx={{ fontSize:35,marginRight:2 }} />
    
  </li>
  <li className={styles.option}>
    <BookmarkBorderIcon sx={{ fontSize:35,marginRight:2 }} />
    
  </li>
  <li className={styles.option}>
    <TwitterIcon sx={{ fontSize:35,marginRight:2 }}/>
    
  </li>
  <li className={styles.option}>
    <PersonIcon sx={{ fontSize:35 ,marginRight:2}} />
    
  </li>
  <li className={styles.option}>
    <MoreHorizIcon sx={{ fontSize:35,marginRight:2 }}/>
    
  </li>
  <li className={styles.option}>
    <AddIcon  onClick={handleOpen} sx={{ fontSize:35,marginRight:2,backgroundColor:"#42a5f5"}}/>
    <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles}>
            <Head />
          </Box>
        </Dialog>
    
  </li>
  <PopupState
          variant="popover"
          popupId="demo-popup-popover"
          sx={{ backgroundColor: "red" }}
        >
          {(popupState) => (
            <div>
              <Button
                // variant="contained"
                {...bindTrigger(popupState)}
                sx={{
                  textTransform: "none",
                  borderRadius: "5rem",
                  marginTop: "10rem",
                  left:"40%",
                  width: "100%",
                 backgroundColor:"rgb(193, 186, 186)",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    className={styles.avatar}
                    src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
                  />
                  <div>
                 
                  </div>
                </div>
                <MoreHorizIcon />
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                sx={{ height: "200px" }}
              >
                <Button
                  sx={{ display: "block", width: "100%" }}
                 
                >
                  ADD
                </Button>
                <Dialog
                  open={logOutopen}
                  onClose={handlelogOutClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styles}>
                    <p style={{ width: "100%", textAlign: "center" }}>
                      <TwitterIcon sx={{ color: "#42a5f5" }} />
                    </p>
                    <h2 style={{ width: "100%", textAlign: "center" }}>
                      Log out of Twitter?
                    </h2>
                    <p>
                      You can always log back in at any time. If you just want
                      to switch accounts, you can do that by adding an existing
                      account.
                    </p>
                    <Button onClick={handleLogout}>Logout</Button>
                    <Button onClose={handlelogOutClose}>Cancle</Button>
                  </Box>
                </Dialog>
                <Button onClick={handlelogOutOpen}>Logout</Button>
              </Popover>
            </div>
          )}
        </PopupState>
</ul>

</div>
    :


    <div className={styles.sidebar}>
      <ul className={styles.options}>
      <TwitterIcon  className={styles.option} sx={{ color: "#42a5f5", fontSize: "3rem" ,borderRadius:"20px"}} />
        <li className={styles.option}>
          <HomeIcon sx={{ fontSize:35,marginRight:2 }}/>
          Home
        </li>
        <li className={styles.option}>
          <TagIcon sx={{ fontSize:35,marginRight:2 }}/>
          Explore
        </li>
        <li className={styles.option}>
          <NotificationsNoneIcon sx={{ fontSize:35,marginRight:2 }}/>
          Notifications
        </li>
        <li className={styles.option}>
          <MailOutlineIcon sx={{ fontSize:35,marginRight:2 }} />
          Message
        </li>
        <li className={styles.option}>
          <BookmarkBorderIcon sx={{ fontSize:35,marginRight:2 }} />
          Bookmarks
        </li>
        <li className={styles.option}>
          <TwitterIcon sx={{ fontSize:35,marginRight:2 }}/>
          Twitter Blue
        </li>
        <li className={styles.option}>
          <PersonIcon sx={{ fontSize:35 ,marginRight:2}} />
          Profile
        </li>
        <li className={styles.option}>
          <MoreHorizIcon sx={{ fontSize:35,marginRight:2 }}/>
          More
        </li>
        <Button
          onClick={handleOpen}
          variant="contained"
          className={styles.btnss}
          sx={{
            textTransform: "none",
            borderRadius: "5rem",
            height: "3rem",
            fontSize: "28px",
            width: "70%",
            backgroundColor: "#42a5f5",
            marginLeft:"35%"
          }}
        >
          Tweet
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles}>
            <Head />
          </Box>
        </Dialog>
        <PopupState
          variant="popover"
          popupId="demo-popup-popover"
          sx={{ backgroundColor: "red" }}
        >
          {(popupState) => (
            <div>
              <Button
                // variant="contained"
                {...bindTrigger(popupState)}
                sx={{
                  textTransform: "none",
                  borderRadius: "5rem",
                  marginTop: "10rem",
                  left:"40%",
                  width: "100%",
                 backgroundColor:"rgb(193, 186, 186)",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    className={styles.avatar}
                    src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
                  />
                  <div>
                  <span style={{ display: "block" }}></span>
                    <span style={{ fontSize: "20px" }}>@{name}</span>
                  </div>
                </div>
                <MoreHorizIcon />
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                sx={{ height: "200px" }}
              >
                <Button
                  sx={{ display: "block", width: "100%" }}
                 
                >
                  ADD
                </Button>
                <Button onClick={handlelogOutOpen}>Logout</Button>
                <Dialog
                  open={logOutopen}
                  onClose={handlelogOutClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styles}>
                    <p style={{ width: "100%", textAlign: "center" }}>
                      <TwitterIcon sx={{ color: "#42a5f5" }} />
                    </p>
                    <h2 style={{ width: "100%", textAlign: "center" }}>
                      Log out of Twitter?
                    </h2>
                    <p>
                      You can always log back in at any time. If you just want
                      to switch accounts, you can do that by adding an existing
                      account.
                    </p>
                    <Button onClick={handleLogout}>Logout</Button>
                    <Button onClose={handlelogOutClose}>Cancle</Button>
                  </Box>
                </Dialog>
               
              </Popover>
            </div>
          )}
        </PopupState>
      </ul>
      
     
    </div>
}
    </>
  );
};

export default LeftSideBar;

function Head() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [tweet, setTweet] = useRecoilState(tweeData);
  

  
  
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick =(event)=> {
    event.preventDefault()
    
    let newTweet = {
      text: text,
      image: image,
      time: new Date().toLocaleString(),
    };
   
    
    setTweet([newTweet, ...tweet]);
    setText("")
    setImage(null)
  
  }
  return (
    <>
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
            }}
          >
            Everyone
            <KeyboardArrowDownIcon />
          </Button>
        </div>
        <div className={styles.tweetInput}>
          <input
            type="text"
            value={text}
            placeholder="What's happening"
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className={styles.button}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "18px",
              width: "30%",
              borderRadius: "15px",
              transformStyle: "none",
              textTransform: "none",
              border: "none",
              margin: "0px",
            }}
          >
            <PublicIcon  className={styles.everyone}sx={{ height: "15px" }} />
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
              onClick={handleClick}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}