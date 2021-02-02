import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  leftSidebar: {
    backgroundColor: 'white',
    width: '25%',
  },
  mainPart: {},
  divider: {
    height: '100%',
    width: '1',
    backgroundColor: '#7EBAFF',
    filter: 'opacity(0.5)',
  },
  content: {
    flex: 1,
    overflow: 'auto',
    backgroundColor: 'white',
  },
});

export default useStyles;
