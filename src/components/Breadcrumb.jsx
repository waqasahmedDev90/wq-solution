import { Link } from 'react-router-dom';
import breadcrumb from "@/assets/img/breadcrumb.jpg";

export default function Breadcrumb({title, menus}) {

    return (
        <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: `url(${breadcrumb})`}}>
            <div className="container">
                <div className="page-heading">
                    <h1 className="wow fadeInUp" data-wow-delay=".3s"
                        style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        {title}
                    </h1>
                    <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s"
                        style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <i className="fas fa-chevron-right me-2"></i>
                                {menu.link ? (
                                    <Link to={menu.link}>{menu.label}</Link>
                                ) : (menu.label)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}