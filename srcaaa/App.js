import React from "react";
import SideMenu from "../src/components/SideMenu";
import {makeStyles,CssBaseline} from '@material-ui/core';
import Header from "../src/components/Header";
import PageHeader from "./components/PageHeader";
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const styles=makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%',
  }
})

function App() {
const classes=styles();
  return (
    <>
   <SideMenu/>

   <div className={classes.appMain}> 
   <Header/>
   <PageHeader
   title="Page Header"
   description="Page Description"
   icon={<AccessibilityIcon/>}
   />
   </div>
 
   <CssBaseline/>
    </>
  );
}

export default App;
