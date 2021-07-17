import React, { useState } from "react";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import StyleContext from "../../contexts/StylesContext";
import { workExperience } from "../../portifolio";
import './WorkExperience.css';

export default function WorkExperience() {
    const { isDark } = useState(StyleContext);
    if (workExperience.display) {
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                    <div className="experience-container" id="workExperience">
                        <div>
                            <h1 className="experience-heading">Experiences</h1>
                            <div className="experience-cards-div">
                                {
                                    workExperience.experience.map((card, i) => {
                                        return (
                                            <ExperienceCard
                                                key={i}
                                                isDark={isDark}
                                                cardInfo={{
                                                    company: card.company,
                                                    desc: card.desc,
                                                    date: card.date,
                                                    companylogo: card.companylogo,
                                                    role: card.role,
                                                    descBullets: card.descBullets
                                                }}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
    return null;
}