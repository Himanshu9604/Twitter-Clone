import React, { useEffect, useState } from 'react';
import Search from './searchBar/SearchBar';
import TrendingBar from './whatsHappeningBar/TrendingBar';
import Righthomebox2 from './whoToFollowBar/WhoToFollow';
import styles from "./RightSideBar.module.css";

const RightSideBar = () => {
  const [fixedSidebar, setFixedSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > contentHeight - windowHeight) {
        setFixedSidebar(true);
      } else {
        setFixedSidebar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sidebarClass = `${styles.RightSideBar} ${fixedSidebar ? styles.Fixed : ''}`;

  return (
    <div className={sidebarClass}>
      <Search />
      <TrendingBar />
      <Righthomebox2 />
    </div>
  );
};

export default RightSideBar;
