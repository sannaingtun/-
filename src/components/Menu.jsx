import React from 'react';
import "./Menu.css";
const Menu = ({menuname, count}) => {
  return (
    <div className="menu-contents">
            <button onClick={alert('Add method here')}>
              {menuname}
            </button>
            <span>{count}</span>
          </div>
  )
}

export default Menu
