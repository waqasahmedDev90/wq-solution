import { Routes, Route } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/Home';
import About from '@/pages/About';
import HomeTwo from "@/pages/Home-2.jsx";
import HomeThree from "@/pages/Home-3.jsx";
import HomeFour from "@/pages/Home-4.jsx";
import HomeFive from "@/pages/Home-5.jsx";
import Checkout from "@/pages/Checkout.jsx";
import Contact from "@/pages/Contact.jsx";
import Faq from "@/pages/Faq.jsx";
import ShopCart from "@/pages/ShopCart.jsx";
import Team from "@/pages/team/TeamIndex.jsx";
import TeamSlug from "@/pages/team/TeamDetails.jsx";
import Shop from "@/pages/shop/ShopIndex.jsx";
import ShopSlug from "@/pages/shop/ShopDetails.jsx";
import Services from "@/pages/services/ServicesIndex.jsx";
import ServiceSlug from "@/pages/services/ServiceDetails.jsx";
import Project from "@/pages/project/ProjectIndex.jsx";
import ProjectSlug from "@/pages/project/ProjectDetails.jsx";
import Blog from "@/pages/blog/BlogIndex.jsx";
import BlogSlug from "@/pages/blog/BlogDetails.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home-2" element={<HomeTwo />} />
        <Route path="home-3" element={<HomeThree />} />
        <Route path="home-4" element={<HomeFour />} />
        <Route path="home-5" element={<HomeFive />} />
        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="chop-cart" element={<ShopCart />} />
        <Route path="team" element={<Team />} />
        <Route path="team/:slug" element={<TeamSlug />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:slug" element={<ShopSlug />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceSlug />} />
        <Route path="project" element={<Project />} />
        <Route path="project/:slug" element={<ProjectSlug />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogSlug />} />
      </Route>
    </Routes>
  );
}
