import React from 'react';
import useStyle from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ButtonBase, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getUsers } from '../../api/api_tweet';

const Tweeter = ({ name, id, img }) => {
  const classes = useStyle();
  return (
    <ButtonBase style={{ width: '100%' }}>
      <Grid container direction={'row'} className={classes.tweeterParent}>
        <img src={img} style={{ width: 50 }} />
        <Grid
          item
          container
          direction={'column'}
          style={{ width: 'max-content' }}
          className={classes.tweeterNameParent}
        >
          <Typography className={classes.profName}>{name}</Typography>
          <Typography className={classes.profId}>{id}</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

const LeftSidebar = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers((isOk, data) => {
      if (!isOk) return alert('ناموفق تو گرفتن لیست یوزرا');
      setUsers(data);
    });
  }, []);

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container direction={'row-reverse'}>
        <img src={'/images/user img.png'} style={{ width: 'max-content' }} />
        <Grid
          item
          container
          direction={'column'}
          style={{ width: 'max-content' }}
        >
          <Typography className={classes.profName}>محمد مطواعی</Typography>
          <Typography className={classes.profId}>Mohamad.metvayi</Typography>
        </Grid>
      </Grid>
      <Grid item container direction={'column'} className={classes.tweeterRoot}>
        <Typography className={classes.tweeterTitle}>
          بهترین خبرنگاران
        </Typography>
        <Divider style={{ marginLeft: -24, marginRight: -24 }} />
        {users.map((item, index) => {
          return (
            <Link
              key={item.id}
              to={`/users/${item.name}`}
              style={{ width: '100%' }}
            >
              <Tweeter name={item.name} id={item.id} img={item.img} />
              {index !== users.length - 1 && (
                <Divider style={{ marginLeft: -24, marginRight: -24 }} />
              )}
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};

export default LeftSidebar;
