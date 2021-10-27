import React from 'react';
import {makeStyles,withStyles} from '@material-ui/core/styles';

//withStyle and makeStyles
const styles=
    {
        sideMenu:{
            display:'flex',
            flexDirection:'column',
            position: 'absolute',
            left:'0px',
            width:'320px',
            height:'100%',
            backgroundColor:'#253053'
          }
    }



 const SideMenu=(props)=> {
   // const classes = useStyles();
   const {classes}=props;
    return (
        <div className={classes.sideMenu}>
            react 
        </div>
    )
}

export default withStyles(styles)(SideMenu);