import { useState } from "react";
import {menuItems} from "@/data/menu";
import { Link } from 'react-router-dom';

const CollapsibleMenu = () => {
    const [openMenus, setOpenMenus] = useState({});

    // Toggle a specific menu's visibility
    const toggleMenu = (menuKey) => {
        setOpenMenus((prevMenus) => ({
            ...prevMenus,
            [menuKey]: !prevMenus[menuKey],
        }));
    };

    return (
        <ul className="metismenu" id="mobile-menu">
            {menuItems.map((item, index) => (
                <li key={index} className={`has-dropdown ${openMenus[index] ? "active" : ""}`}>
                    {item.submenu ? (
                        <a role="button" onClick={(e) => item.submenu && toggleMenu(index)}>
                            {item.title}
                            {item.submenu && (
                                <i className={`fa-solid ${openMenus[index] ? "fa-minus" : "fa-plus"} ms-auto float-end`}></i>
                            )}
                        </a>
                    ) : (
                        <Link to={item.link}>
                            {item.title}
                        </Link>
                    )}

                    {item.submenu && (
                        <ul className={`submenu collapse ${openMenus[index] ? "show" : ""}`}>
                            {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                    <Link to={subItem.link}>{subItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default CollapsibleMenu;
