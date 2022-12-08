import React from 'react';
import "./Menu.css";
const Menu = ({menuname, count}) => {
  return (
    <div className="menu-contents">
            <button onClick={alert('Add click event here')}>
              {menuname}
            </button>
            <span>{count}</span>
          </div>
  )
}

export default Menu
