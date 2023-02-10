import React from 'react'
// import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import SocialIcons from '../SocialIcons/SocialIcons'

import {work_experience} from './../../assets/work_experience'
import WorkExperienceCard from './WorkExperienceCard'

import './WorkExperience.css'
import HorizontalNavbar from '../HorizontalNavbar/HorizontalNavbar'

const WorkExperience = ()=>{
    return(
        <div className="section-container">
            <Header Heading="My  Work Experience" 
            subHeading="Here are the things I have been associated with!" />

            <div className="work-cards-container">
                    {
                        work_experience.map((work,i)=>{
                            return (<WorkExperienceCard key={i}
                               
                                company_name = {work.company_name}
                                company_location = {work.company_location}
                                job_skills = {work.job_skills}
                                job_description = {work.job_description}                                
                            />)
                        })
                    }
            </div>

            <SocialIcons />
            <HorizontalNavbar/>

            {/* <FooterLink 
            phrase="Check out " 
            link="my individual projects!" 
            toAddress="/projects" /> */}
        </div>
    )
}

export default WorkExperience