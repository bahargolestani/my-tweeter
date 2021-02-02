import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    width: '25%',
    padding: '1.5rem 2rem',
  },
  profText: {
    marginLeft: '0.5rem',
    width: 'max-content',
    direction: '2tr',
  },
  tweeterNameParent: {
    marginRight: '0.5rem',
    width: 'max-content',
  },
  profName: {
    flex: 1,
    marginRight: '10px',
  },
  profId: {
    flex: 1,
    color: theme.palette.text.hint,
    fontSize: '0.7rem',
  },
  tweeterRoot: {
    background: '#f5f8fa',
    marginTop: '3rem',
    borderRadius: '1rem',
    padding: '11px 24px',
  },
  tweeterTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    marginBottom: '11px',
  },
  tweeterParent: {
    padding: '10px 0',
  },
}));

export default useStyles;
