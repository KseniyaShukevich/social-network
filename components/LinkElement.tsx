import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

interface IProps {
  href: string;
  text: string;
}

const LinkElement: React.FC<IProps> = ({ href, text }) => {
  const classes = useStyles();

  return (
    <Link href={href}>
      <a className={classes.link}>{text}</a>
    </Link>
  );
};

export default LinkElement;
