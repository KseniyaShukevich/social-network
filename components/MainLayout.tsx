import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles(() => ({
  main: {
    minHeight: 'calc(100vh - 200px)',
  },
}));

interface IProps {
  children: ReactElement | string;
}

const Container: React.FC<IProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.main}
      >
        {children}
      </Box>
    </>
  );
};

export default Container;
