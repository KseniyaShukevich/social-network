import MainLayout from '../components/MainLayout';
import MyContainer from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { ReactElement, MouseEvent } from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    padding: theme.spacing(8),
    [theme.breakpoints.down(500)]: {
      textAlign: 'center',
      padding: theme.spacing(6),
    },
  },
  heading: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down(500)]: {
      textAlign: 'center',
    },
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

interface IProps {
  children: ReactElement | Array<ReactElement>;
  heading: string;
  disabled: boolean;
  textButton: string;
  handleSubmit: (e: any) => void;
}

const FormLayout: React.FC<IProps> = ({
  children,
  heading,
  disabled,
  textButton,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Container maxWidth="sm">
        <MyContainer>
          <FormControl className={classes.formControl}>
            <Typography variant="h6" className={classes.heading}>
              {heading}
            </Typography>
            {children}
            <Box display="flex" justifyContent="space-between">
              <Button
                disabled={disabled}
                variant="outlined"
                className={classes.button}
                onClick={(e: MouseEvent) => handleSubmit(e)}
                type={'submit'}
              >
                {textButton}
              </Button>
            </Box>
          </FormControl>
        </MyContainer>
      </Container>
    </MainLayout>
  );
};

export default FormLayout;
