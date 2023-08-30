import "./EventDropDownStyles.css";
import React, { useState } from "react";
import { EventDropDownMenu } from "../NavbarItems/MenuItems";
import { Link } from "react-router-dom";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "event-submenu clicked" : "event-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {EventDropDownMenu.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.url}
                className={item.CName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Dropdown;
