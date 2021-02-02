import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    width: '18%',
    padding: '1.5rem 2rem',
  },
  logoType: {
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    marginRight: '1rem',
    color: theme.palette.primary.main,
  },
  hashTagTitle: {
    fontSize: '1.1 rem !important',
    fontWeight: '600 !important',
    marginTop: '3rem',
  },
  hashtag: {
    marginRight: '0.8rem',
    marginTop: '1rem',
  },
  hashTagParent: {
    marginBottom: '0.5rem !important',
    padding: '0.15rem !important',
    width: '100%',
  },
}));

export default useStyles;
