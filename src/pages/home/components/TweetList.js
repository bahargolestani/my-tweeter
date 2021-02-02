import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ data }) => {
  console.log('data', data);
  return (
    <div>
      {data.map((tweet, i) => (
        <Tweet key={i} data={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
