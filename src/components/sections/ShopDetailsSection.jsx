import productDetails1 from "@/assets/img/product/details-1.jpg";
import productDetailsSm1 from "@/assets/img/product/small-details-1.jpg";
import productDetailsSm2 from "@/assets/img/product/small-details-2.jpg";
import productDetailsSm3 from "@/assets/img/product/small-details-3.jpg";
import productDetailsSm4 from "@/assets/img/product/small-details-4.jpg";
import reviewImg from "@/assets/img/review/01.jpg";
import reviewImg2 from "@/assets/img/review/02.jpg";
import reviewImg3 from "@/assets/img/review/03.jpg";
import { Link } from 'react-router-dom';

export default function ShopDetailsSection() {
    return (
        <section className="shop-details-section section-padding">
            <div className="container">
                <div className="shop-details-wrapper">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="shop-details-image">
                                <div className="tab-content">
                                    <div id="thumb1" className="tab-pane fade show active">
                                        <div className="shop-thumb">
                                            <img src={productDetails1} alt="img"/>
                                        </div>
                                    </div>
                                    <div id="thumb2" className="tab-pane fade">
                                        <div className="shop-thumb">
                                            <img src={productDetails1} alt="img"/>
                                        </div>
                                    </div>
                                    <div id="thumb3" className="tab-pane fade">
                                        <div className="shop-thumb">
                                            <img src={productDetails1} alt="img"/>
                                        </div>
                                    </div>
                                    <div id="thumb4" className="tab-pane fade">
                                        <div className="shop-thumb">
                                            <img src={productDetails1} alt="img"/>
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav mb-5">
                                    <li className="nav-item">
                                        <a href="#thumb1" data-bs-toggle="tab" className="nav-link ps-0 active">
                                            <img src={productDetailsSm1} alt="img"/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#thumb2" data-bs-toggle="tab" className="nav-link">
                                            <img src={productDetailsSm2} alt="img"/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#thumb3" data-bs-toggle="tab" className="nav-link">
                                            <img src={productDetailsSm3} alt="img"/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#thumb4" data-bs-toggle="tab" className="nav-link">
                                            <img src={productDetailsSm4} alt="img"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="product-details-content">
                                <h2 className="pb-3">Vaccum Cleaner</h2>
                                <div className="star pb-3">
                                    <a href="#"> <i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"> <i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <span>(25 Customer Review)</span>
                                </div>
                                <p className="mb-3">
                                    In today’s online world, a brand’s success lies in combining
                                    technological planning and social strategies to draw
                                    customers in–and keep them coming back
                                </p>
                                <div className="price-list">
                                    <h3>$19.99</h3>
                                </div>
                                <div className="cart-wrp">
                                    <div className="cart-quantity">
                                        <form id='myform' method='POST' className='quantity' action='#'>
                                            <input type='button' value='-' className='qtyminus minus'/>
                                            <input type='text' name='quantity' value='0' className='qty'/>
                                            <input type='button' value='+' className='qtyplus plus'/>
                                        </form>
                                    </div>
                                    <Link to="/shop/details" className="theme-btn">
                                        add to cart
                                    </Link>
                                    <Link to="/shop/details" className="theme-btn">
                                        Buy now
                                    </Link>
                                    <Link to="/shop/details" className="icon">
                                        <i className="far fa-heart"></i>
                                    </Link>
                                    <Link to="/shop/details" className="icon">
                                        <i className="far fa-share"></i>
                                    </Link>
                                </div>
                                <h6 className="details-info"><span>SKU:</span> <Link to="/shop/details">124224</Link>
                                </h6>
                                <h6 className="details-info"><span>Categories:</span> <Link to="/shop/details">Crux
                                    Indoor Fast and Easy</Link></h6>
                                <h6 className="details-info"><span>Tags:</span> <Link to="/shop/details">accessories,
                                    business</Link></h6>
                            </div>
                        </div>
                    </div>
                    <div className="single-tab">
                        <ul className="nav mb-5">
                            <li className="nav-item">
                                <a href="#description" data-bs-toggle="tab" className="nav-link ps-0 active">
                                    <h6>Description</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#additional" data-bs-toggle="tab" className="nav-link">
                                    <h6>Additional Information </h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#review" data-bs-toggle="tab" className="nav-link">
                                    <h6>reviews (3)</h6>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="description" className="tab-pane fade show active">
                                <div className="description-items">
                                    <div className="description-content">
                                        <h3>Product descriptions</h3>
                                        <p className="mb-4">
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                            in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                                            fuga. Et harum quidem rerum facilis est et expedita distinctio. When
                                            purchasing or selling a handcrafted painting, it's essential to have a clear
                                            understanding of these product details to make an informed decision and to
                                            provide potential buyers with a comprehensive description of the artwork.
                                            Additionally, the value and significance of a handcrafted painting can be
                                            influenced by factors like the artist's reputation, the rarity of the piece,
                                            and the demand for their work in the
                                            art market.
                                        </p>
                                        <p>
                                            When purchasing or selling a handcrafted painting, it's essential to have a
                                            clear understanding of these product details to make an informed decision
                                            and to provide potential buyers with a comprehensive description of the
                                            artwork. Additionally, the value and significance of a handcrafted painting
                                            can be influenced by factors like the artist's reputation, the rarity of the
                                            piece, and the demand for their work in the
                                            art market.painting can be influenced by factors like the artist's
                                            reputation, the rarity of the piece, and the demand for their work in the
                                            art market.
                                        </p>
                                        <div className="description-list-items d-flex justify-content-between">
                                            <ul className="description-list">
                                                <li>
                                                    Model wears:
                                                    <span>UK 10/ EU 38/ US 6</span>
                                                </li>
                                                <li>
                                                    Occasion:
                                                    <span> Lifestyle, Sport</span>
                                                </li>
                                                <li>
                                                    Country:
                                                    <span>Italy</span>
                                                </li>
                                            </ul>
                                            <ul className="description-list">
                                                <li>
                                                    Model wears:
                                                    <span>UK 10/ EU 38/ US 6</span>
                                                </li>
                                                <li>
                                                    Occasion:
                                                    <span> Lifestyle, Sport</span>
                                                </li>
                                                <li>
                                                    Country:
                                                    <span>Italy</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="additional" className="tab-pane fade">
                                <div className="table-responsive mb-15">
                                    <table className="table table-bordered">
                                        <tbody>
                                        <tr>
                                            <td>Weight</td>
                                            <td>240 Ton</td>
                                        </tr>
                                        <tr>
                                            <td>Dimensions</td>
                                            <td>20 × 30 × 40 cm</td>
                                        </tr>
                                        <tr>
                                            <td>Colors</td>
                                            <td>Black, Blue, Green</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="review" className="tab-pane fade">
                                <div className="review-items">
                                    <div
                                        className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div className="admin-img pb-4 pb-md-0 me-4">
                                            <img src={reviewImg} alt="image"/>
                                        </div>
                                        <div className="content p-4">
                                            <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>miklos salsa<span>27June 2024 at 5.44pm</span></h5>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur
                                                vulputate vestibulum Phasellus rhoncus dolor eget viverra
                                                pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget
                                                viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div className="admin-img pb-4 pb-md-0 me-4">
                                            <img src={reviewImg2} alt="image"/>
                                        </div>
                                        <div className="content p-4">
                                            <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>Ethan Turner <span>27June 2024 at 5.44pm</span></h5>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur
                                                vulputate vestibulum Phasellus rhoncus dolor eget viverra
                                                pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget
                                                viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div className="admin-img pb-4 pb-md-0 me-4">
                                            <img src={reviewImg3} alt="image"/>
                                        </div>
                                        <div className="content p-4">
                                            <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>Devid Miller<span>27June 2024 at 5.44pm</span></h5>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur
                                                vulputate vestibulum Phasellus rhoncus dolor eget viverra
                                                pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget
                                                viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="review-title mt-5 py-15 mb-30">
                                        <h4>add a review</h4>
                                        <div className="rate-now d-flex align-items-center">
                                            <p>Rate this product? *</p>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-form">
                                        <form action="#" id="contact-form" method="POST">
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="name" id="name"
                                                               placeholder="Full Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="email" id="email"
                                                               placeholder="email addres"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8">
                                                    <div className="form-clt-big form-clt">
                                                        <textarea name="message" id="message"
                                                                  placeholder="message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9">
                                                    <button type="submit" className="theme-btn">
                                                        Post Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}