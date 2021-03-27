import {Twitter, GitHub} from '@material-ui/icons';
import {Grid, Link} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    socialButton: {
      display: 'block',
    },
  }),
);

export default function SocialButton() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} spacing={1} container>
      <Grid item>
        <Link className={classes.socialButton} href="https://twitter.com/hamatatsu0">
          <Twitter fontSize="large" />Twitter
        </Link>
      </Grid>
      <Grid item>
        <Link className={classes.socialButton} href="https://github.com/hamatatsu">
          <GitHub fontSize="large" />GitHub
        </Link>
      </Grid>
    </Grid>
  );
}
