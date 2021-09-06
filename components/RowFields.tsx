import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
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
}));

interface IProps {
  firstLabel: string;
  firstType?: string;
  secondLabel: string;
  secondTyle?: string;
}

const RowFields: React.FC<IProps> = ({
  firstLabel,
  firstType = '',
  secondLabel,
  secondTyle = '',
}) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      className={classes.containerFields}
    >
      <TextField
        label={firstLabel}
        type={firstType}
        className={classes.field}
      />
      <TextField
        label={secondLabel}
        type={secondTyle}
        className={classes.field}
      />
    </Box>
  );
};

export default RowFields;
