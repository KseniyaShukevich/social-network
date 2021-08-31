import MainLayout from '../components/MainLayout';
import MyContainer from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CardProfile from '../components/CardProfile';

const useStyles = makeStyles((theme) => ({
  box: {
    justifyContent: 'space-between',
  },
  chats: {
    height: 'calc(100vh - 200px)',
    width: 250,
    minHeight: 300, // ???
    padding: theme.spacing(4),
  },
  block: {
    width: 'calc(100% - 280px)',
  },
  containerProfile: {
    marginBottom: theme.spacing(2),
  },
  containerInfo: {
    marginLeft: theme.spacing(2),
  },
  info: {
    height: 100,
    padding: theme.spacing(4),
  },
  blog: {
    padding: theme.spacing(4),
  }
}));

const Account: React.FC = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Container>
        <Box display="flex" className={classes.box}>
          <MyContainer>
            <div className={classes.chats}>Chats</div>
          </MyContainer>
          <Box className={classes.block}>
            <Box display='flex' className={classes.containerProfile}>
              <CardProfile />
              <div className={classes.containerInfo}>
                <MyContainer>
                  <div className={classes.info}>Info</div>
                </MyContainer>
              </div>
            </Box>
            <div>
              <MyContainer>
                <div className={classes.blog}>Blog</div>
              </MyContainer>
            </div>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default Account;
