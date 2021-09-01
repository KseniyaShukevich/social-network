import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 70,
    position: 'relative',
    marginBottom: theme.spacing(2),
  },
  heading: {
    position: 'absolute',
  },
}));

export default useStyles;
