import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import {makeStyles} from "@material-ui/styles";
import SearchIcon from '@material-ui/icons/Search';

const styles=makeStyles({
    root:{
        backgroundColor:"#fff",
    },
    searchInput:{
        opacity:'0.6',
        padding:"0px 8px",
        fontSize:"0.8rem",
        '&:hover':{
            backgroundColor:"#ccc"
        }
    }
})

const Header = () => {
    const classes=styles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar >
      <Grid container alignItems="center">
        <Grid item>
          <InputBase className={classes.searchInput} placeholder="search item" startAdornment={<SearchIcon fontSize="small"/>} />
        </Grid>
        <Grid item sm></Grid>
        <Grid item>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="primary">
              <ChatBubbleOutlineIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <PowerSettingsNewIcon />
          </IconButton>
        </Grid>
      </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
