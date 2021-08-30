import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from './Container';

const useStyles = makeStyles((theme) => ({

}));

const CardProfile: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>

    </Container>
    // <Box
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    //   flexDirection="column"
    //   className={classes.box}
    // ></Box>
  );
};

export default CardProfile;
