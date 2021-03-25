import { makeStyles, Typography, Button } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    backgroundColor: "#1A91DA",
  },
  loginSide: {},
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <ul>
          <li>
            <Typography>Read what is happening around the world</Typography>
          </li>
          <li>
            <Typography>Know what is up </Typography>
          </li>
          <li>
            <Typography>Join Twitter to be in the trend</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <TwitterIcon />
        <Typography>Happening now</Typography>
        <Typography>Join Twitter today.</Typography>
        <Button>Sign up</Button>
        <Button>Login</Button>
      </section>
    </div>
  );
};

export default SignIn;
