import React from 'react';
import useStyle from '../styles';
import Header from '../../../components/header/Header';
import Divider from '@material-ui/core/Divider';
import TweetList from '../components/TweetList';
import PersonIcon from '@material-ui/icons/Person';
import { getAllTweets } from '../../../api/api_tweet';

const TweetsByUser = (props) => {
  const [tweets, setTweets] = React.useState([]);

  React.useEffect(() => {
    getAllTweets((isOk, data) => {
      if (!isOk) return alert(data.message);
      else setTweets(data);
    });
  }, []);

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header title={props.match.params.user} icon={<PersonIcon />} />
      <Divider className={classes.divider} />
      <TweetList data={tweets} />
    </div>
  );
};
export default TweetsByUser;
