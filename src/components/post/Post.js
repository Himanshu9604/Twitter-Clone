import React from 'react'
import styles from './Post.module.css'
import {  Box } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { tweetsAtom } from '../../recoil/TweetsRecoil'
import { usersAtom } from '../../recoil/UsersRecoil'
import PostCard from './PostCard'


export default function Post() {

  const tweets = useRecoilValue(tweetsAtom)
  const users = useRecoilValue(usersAtom)

  // const images = new Array(10).fill(0).map((x, index) => {
  //   return `https://picsum.photos/1000/500?q=${index}`;
  // });

  // const avt = new Array(10).fill(0).map((x, index) => {
  //   return <Avatar src="https://picsum.photos/1000/500?q=${index}"/>
  // });


  return (
    <div className={styles.postContainer}>
    
    <Box>
     {tweets.map((tweet)=>(
        <PostCard className={styles.postCards} key={tweet.in} tweet={tweet} />
     ))}
     
    
     </Box>
     
    </div>
  );
  }