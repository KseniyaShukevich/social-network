import type { NextPage } from 'next';
import MainLayout from '../components/MainLayout';
import MyContainer from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.down(500)]: {
      textAlign: 'center',
      padding: 0,
    },
  },
  heading: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down(500)]: {
      textAlign: 'center',
    },
  },
  containerFields: {
    [theme.breakpoints.down(500)]: {
      display: 'block',
    },
  },
  field: {
    width: '48%',
    minWidth: 150,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down(500)]: {
      width: '100%',
    },
  },
  button: {
    width: '48%',
    marginTop: theme.spacing(3),
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Container maxWidth="sm">
        <MyContainer>
          <FormControl className={classes.formControl}>
            <Typography variant="h6" className={classes.heading}>
              Login / Signup
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              className={classes.containerFields}
            >
              <TextField label="email" className={classes.field} />
              <TextField
                type="password"
                label="password"
                className={classes.field}
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button variant="outlined" className={classes.button}>
                Login
              </Button>
              <Button variant="outlined" className={classes.button}>
                Signup
              </Button>
            </Box>
          </FormControl>
        </MyContainer>
      </Container>
    </MainLayout>
  );
};

export default Home;
