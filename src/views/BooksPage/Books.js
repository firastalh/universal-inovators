import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Fade from 'react-reveal/Fade';
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js"
import BooksDetails from "./BooksDetails.js";
import BookCard from "./BookCard"
import Preloader from "components/Preloader/Preloader.js";





const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Conferences(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
   
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Universal Inovators"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
        {...rest}
      />
      <Fade duration = "1500"  >
      <Parallax filter image={require("assets/img/books-page.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}><CharPose text="Books Series"/></h1>
  
              <br />

            </GridItem>
            
          </GridContainer>
        </div>
      </Parallax>
      </Fade>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <br/>
        <BookCard/>
        <BooksDetails/>
        
       
          
        
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
