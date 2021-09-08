import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from './Container';
import { useRef } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  box: {
    width: 250,
    height: 250,
    overflow: 'hidden',
    position: 'relative',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arr_container: {
    position: 'absolute',
    width: 50,
    height: 50,
    background: 'white',
    bottom: 0,
    right: 0,
    borderRadius: '23px 0 23px 0',
    color: 'rgb(70, 70, 70)',
    fontSize: '1.6rem',
    cursor: 'pointer',
    transition: 'all .4s',
  },
  arr_container_icon: {
    transform: 'rotate(45deg)',
  },
  left_container: {
    position: 'absolute',
    background: '#0f2027',
    width: '100%',
    height: '100%',
    borderRadius: 23,
    padding: '40px 0 0 20px',
    transition: 'all .4s',
    color: theme.palette.common.white,
  },
  off: {
    transform: 'translate(-80%, -80%) rotate(90deg)',
  },
  active_arr: {
    transform: 'translate(80%, 80%)',
  },
  active: {
    transform: 'translate(0) rotate(0)',
  },
}));

const CardProfile: React.FC = () => {
  const classes = useStyles();
  const cancel = useRef<any>(null);
  const arr = useRef<any>(null);
  const leftContainer = useRef<any>(null);

  const handleOpen = () => {
    arr.current.classList.add(classes.active_arr);
    if (leftContainer.current.classList.contains(classes.off)) {
      leftContainer.current.classList.remove(classes.off);
      leftContainer.current.classList.add(classes.active);
    }
  }

  const handleClose = () => {
    arr.current.classList.remove(classes.active_arr);
    if (leftContainer.current.classList.contains(classes.active)) {
      leftContainer.current.classList.add(classes.off);
      leftContainer.current.classList.remove(classes.active);
    }
  }

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        className={classes.box}
      >
        {/* <img src='../public/favicon.ico' alt='' /> */}
        <div>
          <p>Evan Smith</p>
          <p>Front-end developer</p>
        </div>
        <div
          ref={arr}
          onClick={handleOpen}
          className={classes.arr_container + ' ' + classes.center}
        >
          <ArrowForwardIcon className={classes.arr_container_icon} />
        </div>

        <div
          ref={leftContainer}
          className={classes.left_container + ' ' + classes.off}
        >
          <p>
             j f hfekj fk jasfjf jkaj wfjw fjbakj fbajbfkj bwfjkwbfjabjfbfasb fsaj a kjfj agwg fjak skfasjh
          </p>
          {/* <p>Skills</p>
          <div>
            <div>HTML</div>
            <div>CSS</div>
            <div>React</div>
            <div>Node js</div>
          </div>
          <div>
            <i>github</i>
            <i>linkedin</i>
            <i>twitter</i>
            <i>facebook</i>
          </div> */}
          <div
            ref={cancel}
            onClick={handleClose}
            className={classes.arr_container + ' ' + classes.center}
          >
            <CloseIcon />
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default CardProfile;
