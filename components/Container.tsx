import { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: theme.spacing(4),
    backgroundColor: '#f0f0f3',
    boxShadow: '10px 10px 21px #d3d3d6, -10px -10px 21px #fff',
    overflow: 'hidden',
    [theme.breakpoints.down(500)]: {
      borderRadius: theme.spacing(2),
    },
  },
}));

interface IProps {
  children: Array<ReactElement> | ReactElement | string;
}

const Container: React.FC<IProps> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Container;
