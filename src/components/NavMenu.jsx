import { Link } from 'react-router-dom';
import {menuItems} from "@/data/menu";

const NavMenu = () => {
    return (
        <ul>
            {menuItems.map((item, index) => (
                <li key={index} className={`${item.submenu ? "has-dropdown " : ""} menu-thumb`}>
                    <Link to={item.link}>
                        {item.title} {item.icon && <i className={item.icon}></i>}
                    </Link>
                    {item.submenu && (
                        <ul className={`submenu ${item.mega_menu ? 'has-homemenu' : ''}`}>
                            {item.mega_menu && item.submenu ? (
                                <li>
                                    <div className="homemenu-items">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <div key={subIndex} className="homemenu">
                                                <div className="homemenu-thumb">
                                                    <img src={subItem.imgSrc} alt="menu-img" />
                                                    <div className="demo-button">
                                                        <Link to={subItem.link} className="theme-btn">Demo Page</Link>
                                                    </div>
                                                </div>
                                                <div className="homemenu-content text-center">
                                                    <h4 className="homemenu-title">{subItem.title}</h4>
                                                </div>
                                            </div>
                                            )
                                        )}
                                    </div>
                                </li>
                            ) : (
                                item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex} className="menu-thumb">
                                        <Link to={subItem.link}>{subItem.title}</Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;
