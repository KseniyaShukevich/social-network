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
    height: 70,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down(500)]: {
      width: '100%',
    },
  },
}));

interface IProps {
  firstName: string;
  firstType: string;
  firstLabel: string;
  firstValue: string;
  firstError: boolean;
  firstTextError: string | undefined;
  secondName: string;
  secondTyle: string;
  secondLabel: string;
  secondValue: string;
  secondError: boolean;
  secondTextError: string | undefined;
  firstHandleBlur: (e: ChangeEvent) => void;
  secondHandleBlur: (e: ChangeEvent) => void;
  firstHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  secondHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RowFields: React.FC<IProps> = ({
  firstName,
  firstType,
  firstLabel,
  firstValue,
  firstError,
  firstTextError,
  secondName,
  secondTyle,
  secondLabel,
  secondValue,
  secondError,
  secondTextError,
  firstHandleBlur,
  secondHandleBlur,
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
        name={firstName}
        label={firstLabel}
        value={firstValue}
        type={firstType}
        className={classes.field}
        error={firstError}
        helperText={firstError ? firstTextError : ''}
        onBlur={firstHandleBlur}
        onChange={firstHandleChange}
      />
      <TextField
        name={secondName}
        label={secondLabel}
        value={secondValue}
        type={secondTyle}
        className={classes.field}
        error={secondError}
        helperText={secondError ? secondTextError : ''}
        onBlur={secondHandleBlur}
        onChange={secondHandleChange}
      />
    </Box>
  );
};

export default RowFields;
