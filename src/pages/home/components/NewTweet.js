import React from 'react';
import useStyle from '../styles';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton, Input, Typography } from '@material-ui/core';
import classnames from 'classnames';
import axios from 'axios';
import { newTweetRequest } from '../../../api/api_tweet';

const NewTweet = () => {
  const classes = useStyle();
  const input = React.useRef();

  //const [tweet, setTweet] = React.useState();

  const newTweetClick = () => {
    console.log('clicked');
    const tweetText = input.current.innerText;
    if (!tweetText) return;
    const data = {
      id: Math.floor(Math.random() * 1000),
      sender: {
        name: 'Mohamad',
        id: '@mohamad.unique',
        img: '/images/samsung.png',
      },
      text: tweetText,
      likes: 9,
    };
    newTweetRequest(data, (res, isOk) => {
      console.log('res', res);
      if (!isOk) return alert('ارسال نشد');
      alert('ارسال شد');
    });
  };

  return (
    <div className={classes.newTweet}>
      <Grid container>
        <img src={'/images/user img.png'} style={{ width: 'max-content' }} />
        <div
          contentEditable
          placeholder={'توییت کن ...'}
          className={classnames(classes.input, 'editable')}
          data-placeholder="توییت کن ..."
          ref={input}
        />
      </Grid>
      <Grid container direction={'row-reverse'} style={{ marginTop: 16 }}>
        <Button
          variant={'contained'}
          color={'primary'}
          className={classes.newTweetBtn}
          onClick={newTweetClick}
        >
          توییت
        </Button>
        <IconButton className={classes.newTweetImgBtn}>
          <img src={'/images/tweetpic.png'} className={classes.newTweetImg} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default NewTweet;
