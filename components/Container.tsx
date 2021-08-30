import { makeStyles } from "@material-ui/core/styles";
import { ReactElement } from "react";

const useStyles = makeStyles((theme) =>({
  container: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: '#f0f0f3',
    boxShadow: '10px 10px 21px #d3d3d6, -10px -10px 21px #fff',
    padding: theme.spacing(4),
  }
}))

interface IProps {
  children: ReactElement | string,
}

const Container: React.FC<IProps> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default Container;
