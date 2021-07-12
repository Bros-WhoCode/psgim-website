import React from 'react';

import '../styles/NavLink.css';

const NavLink = ({title, content, isDropdown}) => {

    const dropdown = (title, content) => {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id={`nav-link-${title}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {title}
                </a>
                <ul className="dropdown-menu" aria-labelledby={`nav-link-${title}`}>
                    {Object.keys(content).map((key, index) => {
                        if(key === "divder"){
                            return (
                                <li key={index}><hr className="dropdown-divider"/></li>
                            );
                        }else{
                            return (
                                <li key={index}><a className="dropdown-item" href={content[key]}>{key}</a></li> 
                            );
                        }
                    })}
                </ul>
            </li>
    );
    }

    const normal = (title) => {
        return (
            <li className="nav-item">
                <a className="nav-link" href="#">{title}</a>
            </li>
        );
    }


    return (
        <>
            {isDropdown && dropdown(title, content)}
            {!isDropdown && normal(title)}
        </>
    );
}
 
export default NavLink;