import React from "react";

const WorkItems = ({item}) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt='' className="work__img"/>
            <h3 className="work__title">{item.title}</h3>
            <p className="work__desc">{item.description}</p>
            <div className="work__link">
            <ul className="work__tool">
                {item.tools.map((tool, index) => (
                    <li className ="work__toolitem" key={index}>{tool}</li>
                ))}
            </ul>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <item.icon size={20} className="work__icon"/>
            </a>
            </div>
        </div>
    )
}

export default WorkItems;