import * as React from "react";
import { styled, alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/icons/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import FieldArraysForm from "../testForm/reactformTest";
//import showResults from "../testForm/showResult";
import TwoClick from "../testForm/twoClick";
import TestGrid from "../testForm/testGrid";




const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  itemFlexGrow: {
    flexGrow: 1,
    border: "1px solid red",
  },
}));
function GridItem({ classes }) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={4}>
      <Paper className={classes.paper}>item</Paper>
    </Grid>
  
  );
}

const Header = () => {
  const classes = useStyles();
  return (
      <div>

     
  
    <Box>
    <AppBar>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src={process.env.PUBLIC_URL + "/images/social-media-logo.jpg"}
          height="50"
          width="50"
          alt="logo"
        />
      </Toolbar>
    </AppBar>
        </Box>
      
        <Box>

        <Grid container spacing={3}>
        <Grid item xs={6}>
          <div>Hooray something is here!</div>
        </Grid>
        <Grid item xs={6}>
          <div> Hooray something is too! </div>
        </Grid>
        <Grid item xs={4}>
          <div> Another item! </div>
        </Grid>
        <Grid item xs={4}>
          <div> Showing off rows! </div>
        </Grid>
        <Grid item xs={4}>
          <div> Last item! </div>
        </Grid>
      </Grid>

            </Box>

            <Box>
            <Grid container spacing={3}>
        <Grid item xs>
          <div> 1</div>
        </Grid>
        <Grid item xs>
          <div> 2 </div>
        </Grid>
        <Grid item xs>
          <div> 3 </div>
        </Grid>
        <Grid item xs>
          <div> 4 </div>
        </Grid>
      </Grid>
            </Box>
   

{/* <FieldArraysForm  onSubmit={showResults} /> */}
<TwoClick/>
<TestGrid/>
     
    </div>
  );
};

export default Header;
