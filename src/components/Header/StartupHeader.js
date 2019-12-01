/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// @material-ui/icons
import { Apps,Home,PersonAdd,CheckBox,Money,People, Create} from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function StartupHeader(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/startup"
          color="transparent"
          className={classes.navLink}
        >
         <Home className={classes.icons} /><b>Home</b>
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="startup-about"
          color="transparent"
          className={classes.navLink}
        >
         <Apps className={classes.icons} /><b>About</b> 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="startup-eligibility"
          color="transparent"
          className={classes.navLink}
        >
         <CheckBox className={classes.icons} /><b>Eligibility Criteria</b> 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/startup-application-procedure"
          color="transparent"
          className={classes.navLink}
        >
          <PersonAdd className={classes.icons} /><b>Application Procedure</b>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/startup-application-form"
          color="transparent"
          className={classes.navLink}
        >
          <Create className={classes.icons} /><b>Apply Now</b>
        </Button>
      </ListItem>
      
    </List>
  );
}
