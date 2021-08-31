import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from './Container';
import { useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  box: {
    width: 250,
    height: 250,
    overflow: 'hidden',
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
  arr_container_i: {
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
  const [isActiveArr, setIsActiveArr] = useState<boolean>(false);
  const [isOffLeftContainer, setIsOffLeftContainer] = useState<boolean>(true);
  const [isActiveLeftContainer, setIsActiveLeftContainer] = useState<boolean>(false);

  const handleClick = () => {
    console.log('CLICK');
    setIsActiveArr((prev) => !prev);
    setIsOffLeftContainer((prev) => !prev);
    setIsActiveLeftContainer((prev) => !prev);
    // setIsActiveArr(true);
    // setIsOffLeftContainer(false);
    // setIsActiveLeftContainer(true);
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
        <Box
          onClick={handleClick}
          // ref={arr}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.arr_container + ' ' + isActiveArr ? classes.active_arr : ''}
        >
          <i className={classes.arr_container_i}>Arrow</i>
        </Box>

        <div
          // ref={leftContainer}
          className={classes.left_container + ' ' + isOffLeftContainer ? classes.off : isActiveLeftContainer ? classes.active : ''}
        >
          <p>Skills</p>
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
          </div>
          <Box
            // ref={cancel}
            onClick={handleClick}
            display="flex"
            justifyContent="center"
            alignItems="center"
            className={classes.arr_container}
          >
            <i>Cancel</i>
          </Box>
        </div>
      </Box>
    </Container>
  );
};

export default CardProfile;
