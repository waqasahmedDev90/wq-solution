import homeImg1 from "@/assets/img/header/home-1.jpg";
import homeImg2 from "@/assets/img/header/home-2.jpg";
import homeImg3 from "@/assets/img/header/home-3.jpg";
import homeImg4 from "@/assets/img/header/home-4.jpg";
import homeImg5 from "@/assets/img/header/home-5.jpg";

// Sample menu items (replace with actual data)
export const menuItems = [
    {
        title: "Home",
        link: "/",
        icon: "fa-solid fa-chevron-down",
        mega_menu: true,
        submenu: [
            { title: "Home 01", link: "/", imgSrc: homeImg1 },
            { title: "Home 02", link: "/home-2", imgSrc: homeImg2 },
            { title: "Home 03", link: "/home-3", imgSrc: homeImg3 },
            { title: "Home 04", link: "/home-4", imgSrc: homeImg4 },
            { title: "Home 05", link: "/home-5", imgSrc: homeImg5 },
        ],
    },
    {
        title: "Pages",
        link: "/news",
        icon: "fa-solid fa-chevron-down",
        submenu: [
            { title: "About Us", link: "/about" },
            { title: "Team", link: "/team" },
            { title: "Team Details", link: "/team/details" },
            { title: "Shop", link: "/shop" },
            { title: "Shop Cart", link: "/shop-cart" },
            { title: "Shop Details", link: "/shop/details" },
            { title: "Checkout", link: "/checkout" },
            { title: "FAQ", link: "/faq" },
            { title: "404 Page", link: "/404" },
        ],
    },
    {
        title: "Services",
        link: "/services",
        icon: "fa-solid fa-chevron-down",
        submenu: [
            { title: "Service Page", link: "/services" },
            { title: "Service Details", link: "/services/details" },
        ],
    },
    {
        title: "Projects",
        link: "/project",
        icon: "fa-solid fa-chevron-down",
        submenu: [
            { title: "Projects", link: "/project" },
            { title: "Project Details", link: "/project/details" },
        ],
    },
    {
        title: "Blog",
        link: "/news/details",
        icon: "fa-solid fa-chevron-down",
        submenu: [
            { title: "Blog", link: "/blog" },
            { title: "Blog Details", link: "/blog/details" },
        ],
    },
    { title: "Contact", link: "/contact" },
];