import React from "react";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { ImHtmlFive2 } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { PiAndroidLogo } from "react-icons/pi";

const SkillsData = () => {
    return (
        <div className="skills__content">
                    <div className="skills__data">

                        <div className="skills__item">
                            <ImHtmlFive2 className="skill__icon"/>
                            <h3 className="skill_name">HTML</h3>
                        </div>

                        <div className="skills__item">
                            <TbBrandCss3 className="skill__icon"/>
                            <h3 className="skill_name">CSS</h3>
                        </div>

                        <div className="skills__item">
                            <RiJavascriptLine className="skill__icon"/>
                            <h3 className="skill_name">JavaScript</h3>
                        </div>

                        <div className="skills__item">
                            <FaReact className="skill__icon"/>
                            <h3 className="skill_name">React</h3>
                        </div>

                        <div className="skills__item">
                            <FaNodeJs className="skill__icon"/>
                            <h3 className="skill_name">NodeJS</h3>
                        </div>

                        <div className="skills__item">
                            <GrMysql className="skill__icon"/>
                            <h3 className="skill_name">MySQL</h3>
                        </div>

                        <div className="skills__item">
                            <PiAndroidLogo className="skill__icon"/>
                            <h3 className="skill_name">Android</h3>
                        </div>

                        <div className="skills__item">
                            <FaFigma className="skill__icon"/>
                            <h3 className="skill_name">Figma</h3>
                        </div>
                    </div>
        </div>
    )
}

export default SkillsData;