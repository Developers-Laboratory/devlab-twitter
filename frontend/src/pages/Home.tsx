import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import {
  Grid,
  Paper,
  IconButton,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";

const useHomeStyles = makeStyles(() => ({
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
  },
  sideMenuListItem: {
    display: "flex",
    alignItems: "center",
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 13,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
}));

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton className={classes.logo}>
                <TwitterIcon className={classes.logoIcon} color="primary" />
              </IconButton>
            </li>

            <li className={classes.sideMenuListItem}>
              <IconButton>
                <SearchIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Search
              </Typography>
            </li>

            <li className={classes.sideMenuListItem}>
              <IconButton>
                <NotificationsNoneIcon
                  className={classes.sideMenuListItemIcon}
                />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Notifications
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <MailOutlineIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Message
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <BookmarkBorderIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Bookmarks
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <ListAltIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Lists
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <PersonOutlineIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Profile
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
