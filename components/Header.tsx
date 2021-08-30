import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    height: 70,
    position: 'relative',
  },
  heading: {
    position: 'absolute',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.header}
    >
      <Typography variant="h4" className={classes.heading}>
        Social Network
      </Typography>
    </Box>
  );
};

export default Header;
