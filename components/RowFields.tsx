import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { ChangeEvent } from 'react';

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
  firstValue: string;
  secondLabel: string;
  secondTyle?: string;
  secondValue: string;
  firstHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  secondHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RowFields: React.FC<IProps> = ({
  firstLabel,
  firstType = '',
  firstValue,
  secondLabel,
  secondTyle = '',
  secondValue,
  firstHandleChange,
  secondHandleChange,
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
        value={firstValue}
        type={firstType}
        className={classes.field}
        onChange={firstHandleChange}
      />
      <TextField
        label={secondLabel}
        value={secondValue}
        type={secondTyle}
        className={classes.field}
        onChange={secondHandleChange}
      />
    </Box>
  );
};

export default RowFields;
