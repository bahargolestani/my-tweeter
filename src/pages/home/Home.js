import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import NewTweet from './components/NewTweet';
import useStyle from './styles';
import TweetList from './components/TweetList';
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios';
import { getAllTweets } from '../../api/api_tweet';
import Search from './components/Search';

const Home = () => {
  const classes = useStyle();
  const [tweets, setTweets] = useState([]);

  React.useEffect(() => {
    getAllTweets((isOk, data) => {
      if (!isOk) return alert('ناموفق بود');
      setTweets(data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Search />
      <Header title={'خانه'} icon={<HomeIcon />} />
      <Divider className={classes.divider} />
      <NewTweet />
      <TweetList data={tweets} />
    </div>
  );
};
export default Home;
