import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Fade from "react-reveal/Fade"
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import sideImage from "assets/img/workshops.jpg"

const useStyles = makeStyles(styles);

const flex = {
  display : 'flex',
  alignItems : 'center',
} 

export default function Details() {
  const classes = useStyles();
  const design ={
     textAlign : "justify"
   }

  const border ={
     border : "1px solid skyblue",
     boxShadow : "5px 10px #eee"
   }

  const card ={textAlign: "justify",float : "left", color : "gray"} 
  return (
    <div className={classes.section}>
        <h3 className={classes.title}>FDPs/ Workshops/ Seminars</h3>
          <GridContainer style = {flex}>
              <GridItem xs={12} sm={12} md={4}>
                <Fade left duration={2000}>
                <img style = {{width : "100%"}}src={sideImage}/>
                </Fade> 
              </GridItem>    

              <GridItem xs={12} sm={12} md={8}>

              <Fade right duration ={2000}>
              <p className={classes.description} style={design} >
              Universal Inovators have already organised a very successful <strong>One Week Faculty Development Program on "Machine Learning with Data Analytics" at Shaheed Sukhdev College of Business Studies</strong>,
              New Delhi during 15th-20th July 2019. The total number of participants attended the FDP is 50. The participants includes Industry Personnel, Academicians, Research Scholars from India as well as 
              from outside India. The reputed and top resource person has been invited as speakers in the FDP.
              </p>
              </Fade>

              </GridItem>
          </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
         
          <Fade bottom>
          <p className={classes.description} style={design}>
          
          </p>
          </Fade>
        </GridItem>
      </GridContainer>
      <h3 className={classes.title}>Universal Innovators Are Inviting Proposals To Conduct:</h3>
      
        <Card style ={border}>
          <CardBody  style = {design}>
             <Fade cascade>
             
             <strong style={card}>1 One Week FDP (National/International)</strong> <hr/>
             <strong style={card}>2 Two Week FDP (National/International)</strong> <hr/>
             <strong style={card}>3 Workshops</strong> <hr/>
             <strong style={card}>4 Seminars</strong> <hr/>
            
             </Fade>
            
          </CardBody>
        </Card>

       
  
    

      
    </div>
  );
}
