import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyle from './styles';
import { ButtonBase, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getHashTags } from '../../api/api_tweet';

const RightSidebar = () => {
  const classes = useStyle();

  const [hashTag, setHashTags] = React.useState([]);

  React.useEffect(() => {
    getHashTags((isOk, data) => {
      if (!isOk) return alert('ناموفق تو گرفتن لیست یوزرا');
      setHashTags(data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Link to={'/'}>
        <Grid container direction={'row'} alignItems={'center'}>
          <Grid item>
            <img
              src={'/images/logo.png'}
              style={{ width: '30px', height: '30px' }}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.logoType}>توییتر فارسی</Typography>
          </Grid>
        </Grid>
      </Link>
      <Typography className={classes.hashTagTitle}>داغ ترین هشتگ ها</Typography>
      <Grid container direction={'column'} alignItems={'center'}>
        {hashTag.map((item, i) => (
          <ButtonBase key={i} className={classes.hashTagParent}>
            <Link to={'/hashtags/' + item} style={{ with: '100%' }}>
              <Grid item container>
                <img
                  src={'/images/hashtag.png'}
                  style={{ width: '20px', height: '20px', marginTop: '1rem' }}
                />
                <Typography className={classes.hashtag}>{item}</Typography>
              </Grid>
            </Link>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  );
};

export default RightSidebar;
