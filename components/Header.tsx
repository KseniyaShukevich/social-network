import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 70,
    marginBottom: theme.spacing(2),
  },
  heading: {
    left: 'calc(50% - 115px)',
    position: 'absolute',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        className={classes.header}
      >
        <Typography variant="h4" className={classes.heading}>
          Social Network
        </Typography>
        <Button>Logout</Button>
      </Box>
    </Container>
  );
};

export default Header;
