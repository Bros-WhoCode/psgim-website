import React from 'react';
import '../styles/NavItem.css';

const NavItem = ({name, content = null, isDropdown, customVis = true}) => {

    if(!customVis){
      return (
        <li className="nav-item navitem-customvis">
          <a className="nav-link navitem-head" href="#">{name+'\t'}</a>
        </li>
      )
    }

    else if (!isDropdown) {
      return (
        <li className="nav-item">
          <a className="nav-link navitem-head" href="#">{name+'\t'}</a>
        </li>
      )
    }

    return (
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle navitem-head" href="#" data-bs-toggle="dropdown" >
            {name+'\t'}
          </a>
          <ul className="dropdown-menu navitem-dropdown" aria-labelledby="navbarDropdown">
            {
              Object.keys(content).map((key, index) => (
                <li key={index} className="navitem-subitem"><a href={content[key]} className="dropdown-item">{key}</a></li>
              ))
            }
          </ul>
        </li>
    )
}

export default NavItem