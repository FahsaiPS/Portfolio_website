import React from "react";
import "./skills.css";
import SkillsData from "./SkillsData";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container container">
                <SkillsData/>
            </div>
        </section>
    )
}

export default Skills;