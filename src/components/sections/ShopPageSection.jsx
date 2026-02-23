import ProductList from "@/components/Product/ProductList";

export default function ShopPageSection() {
    return (
        <section className="shop-page-section fix section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 order-2 order-md-1">
                        <div className="shop-main-sidebar">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>search here</h4>
                                </div>
                                <div className="search_widget">
                                    <form action="#">
                                        <input type="text" placeholder="search here"/>
                                        <button type="submit"><i className="fal fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            {/*<div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Filter By Price</h4>
                                </div>
                                <div className="range__barcustom">
                                    <div className="slider">
                                        <div className="progress" style={{ left: '25%', right: '25%'}}></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value="2500"/>
                                        <input type="range" className="range-max" min="100" max="10000" value="7500"/>
                                    </div>
                                    <div className="range-items">
                                        <div className="price-input d-flex">
                                            <div className="field">
                                                <span>$</span>
                                                <input type="number" className="input-min" value="100"/>
                                            </div>
                                            <div className="separators">-</div>
                                            <div className="field">
                                                <span>$</span>
                                                <input type="number" className="input-max" value="1000"/>
                                            </div>
                                            <Link to="/shop/details"
                                               className="theme-btn border-radius-none">Filter</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>filter by Rating</h4>
                                </div>
                                <div className="filter-size">
                                    <label className="checkbox-single d-flex align-items-center">
                                    <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span className="checkbox-area d-center">
                                            <input type="checkbox"/>
                                            <span className="checkmark d-center"></span>
                                        </span>
                                        <span className="text-color">
                                            <span className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </span>
                                            ( 5 Star )
                                        </span>
                                    </span>
                                    </label>
                                    <label className="checkbox-single">
                                    <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span className="checkbox-area d-center">
                                            <input type="checkbox" />
                                            <span className="checkmark d-center"></span>
                                        </span>
                                        <span className="text-color">
                                            <span className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star color-2"></i>
                                            </span>
                                            ( 4 Star )
                                        </span>
                                    </span>
                                    </label>
                                    <label className="checkbox-single d-flex align-items-center">
                                    <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span className="checkbox-area d-center">
                                            <input type="checkbox"/>
                                            <span className="checkmark d-center"></span>
                                        </span>
                                        <span className="text-color">
                                            <span className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star color-2"></i>
                                                <i className="fas fa-star color-2"></i>
                                            </span>
                                            ( 3 Star )
                                        </span>
                                    </span>
                                    </label>
                                    <label className="checkbox-single d-flex align-items-center">
                                    <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span className="checkbox-area d-center">
                                            <input type="checkbox"/>
                                            <span className="checkmark d-center"></span>
                                        </span>
                                        <span className="text-color">
                                            <span className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star color-2"></i>
                                                <i className="fas fa-star color-2"></i>
                                                <i className="fas fa-star color-2"></i>
                                            </span>
                                            ( 2 Star )
                                        </span>
                                    </span>
                                    </label>
                                    <label className="checkbox-single d-flex align-items-center">
                                    <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span className="checkbox-area d-center">
                                            <input type="checkbox"/>
                                            <span className="checkmark d-center"></span>
                                        </span>
                                        <span className="text-color">
                                            <span className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star color-2"></i>
                                                <i className="fas fa-star color-2"></i>
                                                <i className="fas fa-star color-2"></i>
                                                <i className="fas fa-star color-2"></i>
                                            </span>
                                            ( 1 Star )
                                        </span>
                                    </span>
                                    </label>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Filter by Tag</h4>
                                </div>
                                <div className="shop-widget-tag">
                                    <span>Airpods</span>
                                    <span>Watch</span>
                                    <span>Charger</span>
                                    <span>Head Phone</span>
                                    <span>landing</span>
                                    <span>Brochure</span>
                                    <span>Iphone 16 Pro Max</span>
                                    <span>Cap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 order-1 order-md-2">
                        <div className="woocommerce-notices-wrapper wow fadeInUp" data-wow-delay=".3s">
                            <p>Showing <span>12</span> of 21 Results</p>
                            <div className="form-clt">

                                <div className="icon">
                                    <a href="0#"><i className="fas fa-list"></i></a>
                                </div>
                                <div className="icon-2">
                                    <a href="#0"><i className="fas fa-th-large"></i></a>
                                </div>
                            </div>
                        </div>
                        <ProductList />
                        <div className="page-nav-wrap pt-5 text-center">
                            <ul>
                                <li><a className="page-numbers" href="#">01</a></li>
                                <li><a className="page-numbers" href="#">02</a></li>
                                <li><a className="page-numbers" href="#">03</a></li>
                                <li><a className="page-numbers" href="#"><i
                                    className="fa-solid fa-arrow-right-long"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}