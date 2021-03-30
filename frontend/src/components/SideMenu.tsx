import { IconButton, Typography, Button } from "@material-ui/core";
import { useHomeStyles } from "../pages/Home";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.logo}>
          <TwitterIcon className={classes.logoIcon} color="primary" />
        </IconButton>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Search
          </Typography>
        </div>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Notifications
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MailOutlineIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Message
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkBorderIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Bookmarks
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListAltIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Lists
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PersonOutlineIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Profile
          </Typography>
        </div>
      </li>
      <li>
        <Button
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth
        >
          Tweet
        </Button>
      </li>
    </ul>
  );
};
