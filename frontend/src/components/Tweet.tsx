import React from "react";
import { useHomeStyles } from "../pages/Home";
import cn from "classnames";

import { Grid, Paper, IconButton, Typography, Avatar } from "@material-ui/core";

import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
}: TweetProps): React.ReactElement => {
  return (
    <div>
      <Paper
        className={cn(classes.tweets, classes.tweetsHeader)}
        variant="outlined"
      >
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Avatar
              className={classes.tweetAvatar}
              alt={`Avatar of user @{user.fullname}`}
              src={user.avatarUrl}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography>
              {" "}
              <b>{user.fullname}</b>{" "}
              <span className={user.username}> {user.username}</span> &nbsp;
              <span className={classes.tweetsUserName}> • </span>&nbsp;
              <span className={classes.tweetsUserName}>1h</span>&nbsp;
            </Typography>
            <Typography variant="body1" gutterBottom>
              {text}
            </Typography>
            <div className={classes.tweetFooter} id="Icon Group">
              <div>
                <IconButton>
                  <CommentIcon style={{ fontSize: 20 }} />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton>
                  <RepeatOutlinedIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <LikeIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <ShareIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
