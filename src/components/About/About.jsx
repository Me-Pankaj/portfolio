import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
// import AccordionSummary from "@material-ui/core/AccordionSummary";



import Header from '../Header/Header';
import './About.css'

import AboutImage from '../../assets/about_vector.png'

// import FooterLink from '../FooterLink/FooterLink';
import SocialIcons from '../SocialIcons/SocialIcons';

import { withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import HorizontalNavbar from '../HorizontalNavbar/HorizontalNavbar';
const AccordionSummary = withStyles({
  content: {
    flexGrow: 0
  }
})(MuiAccordionSummary);

const About = () =>{
    return(
        <div className="section-container">
            <Header Heading="About me" 
            subHeading="Self-motivated web developer looking for internship or full time job. Passionate about building user-friendly web applications with my skills that I have learnt so far. My strength is that I learnt the things faster and good problem solver.
            I am trying to explore all technologies while pursuing bachleors Computer Engineering." />


            <div className="education-accordian accordian-alignment">
                
                <Accordion className="accordians" style={{backgroundColor: "#84b4f7"}}
                    defaultExpanded={true}>
                    <AccordionSummary className="accordian-summary"
                    expandIcon={<ExpandMoreIcon />}
                    
                    aria-controls="panel1a-content"
                    >
                        <Typography component={'span'} variant={'body2'} className="Accordian-heading" >
                                <h3>My Educational Details</h3>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography component={'span'} variant={'body2'}>
                            <div className="my-details">
                            <h2 className="about-sub-head">
                                Galgotias University :  <i> {' '}Sep’20 - May’24</i>
                            </h2>
                            <p className="about-deatils">
                                Bachelor of Engineering (Computer)	 <br/>		       	           
                                CGPA: <strong>9.03/10 </strong> <br/>
                            </p>

                            <h2 className="about-sub-head">
                                Nayaya Nagar Public School : <i>  Jun’18 - Mar’20</i>
                            </h2>
                            <p className="about-deatils">
                                12th Science	 <br/>		       	           
                                Percentage: <strong>87.60%</strong>  <br/>
                            </p>

                            <h2 className="about-sub-head">
                               Prayag Public School  : <i> Mar’18</i>
                            </h2>
                            <p className="about-deatils">
                                10th 	 <br/>		       	           
                                Percentage: <strong>80.4%</strong>  <br/>
                            </p>
                        </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
            <div className="education-accordian">            
                <Accordion className="accordians" style={{backgroundColor: "#84b4f7"}}>
                    <AccordionSummary className="accordian-summary"
                    expandIcon={<ExpandMoreIcon />}
                    
                    aria-controls="panel1a-content"
                    >
                        <Typography component={'span'} variant={'body2'} className="Accordian-heading">
                        <h3>My Personal Details</h3>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordian-details">
                        <Typography component={'span'} variant={'body2'}>
                            <div className="my-details personal-details ">
                            <h2 className="about-sub-head ">
                                Name: <i>Pankaj Gupta</i>
                            </h2>
                            <h2 className="about-sub-head ">
                                    Birth Date: <i>September, 2002</i>
                            </h2>
                        
                           
                            <h2 className="about-sub-head ">
                                Personal Email: <i>guptapankaj6363@gmail.com</i>
                            </h2>
                            <h2 className="about-sub-head ">
                            Current Address:<i> Noida , UP</i>
                            </h2>
                            <h2 className="about-sub-head ">
                                Known Languages: <i>English, Hindi</i>
                            </h2>
                            <h2 className="about-sub-head ">
                            Interpersonal Skills: <i>Hard Work, Dedication, Quick learner, Teamwork</i>
                            </h2>
                        </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <SocialIcons/>
            {/* <FooterLink 
            phrase="check out my " 
            link="work experience!" 
            toAddress="/experience" /> */}
              <HorizontalNavbar/>
            <div className="vector-frame">
                <img src={AboutImage} className="about-vector" alt="about" />
            </div>
        </div>
    )
}

export default About