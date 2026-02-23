import { Link } from 'react-router-dom';

export default function ProductItem({product}) {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={product.delay}>
            <div className="product-box-items">
                <div className="product-image">
                    <img src={product.image} alt="img"/>
                    <ul className="product-icon d-grid align-items-center">
                        <li>
                            <Link to="/shop-cart"><i className="fa-sharp fa-regular fa-eye"></i></Link>
                        </li>
                        <li>
                            <Link to="/shop-cart">
                                <i className="fa-regular fa-star"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop/details"><i className="fa-regular fa-arrow-up-arrow-down"></i></Link>
                        </li>
                    </ul>
                    <div className="shop-btn">
                        <Link to="/shop-cart" className="theme-btn">Add To Cart</Link>
                    </div>
                </div>
                <div className="product-content">
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="color-2 fa-solid fa-star"></i>
                    </div>
                    <h6><Link to="/shop/details">{product.name}</Link></h6>
                    <span>${product.price}</span>
                </div>
            </div>
        </div>
    )
}