import React from "react";

const Info = () => {
    return (
        <div className="about__info grid" >
            <div className="about__box">
                <i class="uil uil-university about__icon"></i>
                <h3 className="about__title">CSTU</h3>
                <span className="about__subtitle">Major</span>
            </div>

            <div className="about__box">
                <i class="uil uil-book-open about__icon"></i>
                <h3 className="about__title">Software Engineer</h3>
                <span className="about__subtitle">Minor</span>
            </div>

            <div className="about__box about__boxgit">
                <a href="https://github.com/FahsaiPS" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-github-alt about__icon about__git"></i>
                <h3 className="about__title about__git">FahsaiPS</h3>
                <span className="about__subtitle about__git">Github</span>
                </a>
            </div>
        </div>
    )
}

export default Info;