import React from 'react'

import './SocialIcons.css'


import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import web from './../../assets/web.png';
import leetcode from './../../assets/leetcode.png'
import hackerrank from './../../assets/hackerrank.png'

const SocialIcons = ()=>{
    return(
        <div className="social-icons-container">
                <a href="https://www.linkedin.com/in/pankajgupta2025/" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={linkedin} alt="social" />
                </a>
                <a href="https://www.instagram.com/pankajgupta_25/" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={instagram} alt="social" />
                </a>
                <a href="https://github.com/https://github.com/Me-Pankaj" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={github} alt="social" />
                </a>
                <a href="https://leetcode.com/pankaj2025/" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={leetcode} alt="social" />
                </a>
                <a href="https://linktr.ee/pankaj_2025" target="_blank" className="social-icon" rel="noreferrer">
                    <img className="resize" src={web} alt="social" />
                </a>
            </div>
    )
}

export default SocialIcons