import React from "react";
import './new-experience.css';

import experienceData from "../data/experience-data";

const Experience = () => {
    const logoStyle = {
        width: '1.6em',
        height: '1.5em',
    }

    return (
        <div className="experience">
            <div className="timeline">
                {experienceData.map((exp, index) => (
                    <div className="timeline-item">
                        <div className="circle"></div>
                        <div className='line'></div>

                        <div key={index} className={`timeline-entry ${index%2 === 0 ? 'right' : 'left' }`}>
                            <div className="info">
                                <div className="company-name">
                                    <span><img src={exp.logo} style={logoStyle} alt={`${exp.company} company logo`}/></span> <b>{exp.company}</b>
                                </div>

                                <div className="duration">
                                    {exp.duration}
                                </div>
                            </div>

                            <div className="position">
                                <i>{exp.position}</i>
                            </div>

                            <div className="keypoints">
                                <ul>
                                    {exp.keyPoints.map((point, i) => (
                                        <li key={i}>
                                            {point.title ? <b>{point.title}:</b> : ""} {point.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
