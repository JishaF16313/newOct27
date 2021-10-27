import React from "react";
import { Card, Paper, Typography } from "@material-ui/core";
import { makeStyles, mergeClasses } from "@material-ui/core";

const useStyles=makeStyles((theme)=>({

    root:{
        backgroundColor:"#fdfdff",
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:"flex",
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:"inline-block",
        padding:theme.spacing(2),
        color:"#3c44b1"
    }
}))

const PageHeader = (props) => {
  const { title, description, icon } = props;
  const classes=useStyles()
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card>{icon}</Card>
        <div className={classes.pageIcon}>
          <Typography
          variant="h6"
          component="div">
              {title}
              </Typography>
              <Typography
          variant="subtitle2"
          component="div">
              {description}
              </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
