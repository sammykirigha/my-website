import React from "react";
import { skillsSection } from "../../portifolio";
import "./softwareSkills.css";


export default function SoftwareSkills() {
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {skillsSection.softwareSkills.map((skills, i) => {
                        return (
                            <li
                                key={i}
                                className="software-skill-inline"
                                name={skills.skillName}
                            >
                                <i className={skills.fontAwesomeClassname}></i>
                                <p>{skills.skillName}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}