import React from 'react';
import useStyle from '../styles';
import Header from '../../../components/header/Header';
import Divider from '@material-ui/core/Divider';
import TweetList from '../components/TweetList';
import axios from 'axios';
import { getAllTweets } from '../../../api/api_tweet';

const TweetByHashTag = (props) => {
  const [tweets, setTweets] = React.useState([]);

  React.useEffect(() => {
    getAllTweets((isOk, data) => {
      if (!isOk) return alert('ناموفق بود');
      setTweets(data);
    });
  }, []);

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header
        title={props.match.params.hashtag}
        icon={<img src={'/images/hashtag.png'} />}
      />
      <Divider className={classes.divider} />
      <TweetList data={tweets} />
    </div>
  );
};
export default TweetByHashTag;
