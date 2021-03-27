import {IconButton} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {WbSunny, Brightness3} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      right: theme.spacing(1),
      top: theme.spacing(1),
      '& > *': {
        color: theme.palette.secondary.main,
      },
    },
  }),
);

export default function DarkThemeSwitch(props: DarkThemeSwitchProps) {
  const classes = useStyles();

  const handleDarkState = () => {
    props.setter(!(props.state));
  };

  return (
    <IconButton
      className={classes.root}
      onClick={handleDarkState}
      aria-label="dark theme switch">
      {props.state ? <WbSunny /> : <Brightness3 />}
    </IconButton>
  );
}

interface DarkThemeSwitchProps {
  state: boolean,
  setter: (state: boolean) => void,
}
