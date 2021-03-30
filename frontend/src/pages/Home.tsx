import cn from "classnames";
import grey from "@material-ui/core/colors/grey";
import {
  Grid,
  Paper,
  Typography,
  makeStyles,
  Container,
  withStyles,
  createStyles,
  InputBase,
  Theme,
} from "@material-ui/core";
import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 37,
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 230,
  },
  sideMenuListItem: {
    "& div": {
      display: "flex",
      alignItems: "center",
      padding: "0 10px",
      cursor: "pointer",
      borderRadius: 30,
      marginBottom: 10,
      transition: "background-color 0.15s ease-in-out",
      height: 50,
      "&:hover": {
        color: "#52A8E7",
        backgroundColor: "rgba(29,161,242,0.1)",
      },
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 13,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: "10px 15px",

    "& h6": {
      fontWeight: 700,
    },
  },
  tweets: {
    cursor: "pointer",
    paddingTop: 15,
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: "rgb(245,248,250)",
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    display: "flex",
    position: "relative",
    left: -13,
    justifyContent: "space-between",
    width: 450,
  },
  tweetsUserName: {
    color: grey[500],
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      height: 45,
      padding: 0,
      backgroundColor: "#f1f6f9",
    },
  })
)(InputBase);

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Home</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  text="Toshkent shahar hokimligi koronavirusga chalinish holatlari ko‘paygan tumandagi maktablarni onlayn ta’lim shakliga o‘tkazishi mumkin. "
                  classes={classes}
                  user={{
                    fullname: "Abdullah",
                    username: "@im_abon",
                    avatarUrl:
                      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=579&q=80",
                  }}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField id="filled-basic" fullWidth placeholder="Search" />
        </Grid>
      </Grid>
    </Container>
  );
};
