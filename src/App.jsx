import { Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react';
// import WOW from 'wow.js'; <-- WOW.js ab humein nahi chahiye kyunke hum GSAP use kar rahe hain
import { ReactLenis } from '@studio-freight/react-lenis'; // <-- Lenis Import
import { AppWrapper } from "@/context";

import OffcanvasArea from "@/components/OffcanvasArea";
import BackToTop from "@/components/BackToTop";
import Preloader from "@/components/Preloader";
import MouseCursor from "@/components/MouseCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchSection from "@/components/sections/SearchSection.jsx";

function App() {


  return (
    <>
      {/* ReactLenis app ki puri scrolling ko smooth banayega */}
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: false }}>
        
        {/*Preloader Start*/}
          <Preloader />
        {/*Preloader End*/}
        
        <AppWrapper>

          {/*Header Section Start*/}
          <Header/>
            {/*Header Section End*/}

          {/*-- Search Area Start --*/}
          <SearchSection />
          {/*-- Search Area End --*/}

            <main>
              <Outlet />
            </main>
          
          {/*Back To Top Start*/}
            <BackToTop />
              {/*Back To Top End*/}

              {/*Offcanvas Area Start*/}
              <OffcanvasArea/>
              {/*Offcanvas Area End*/}

              {/*Mouse Cursor Start*/}
              <MouseCursor />
              {/*Mouse Cursor end*/}

              {/*Footer Section Start*/}
              <Footer/>
              {/*Footer Section End*/}
        </AppWrapper>
        
      </ReactLenis>
    </>
  )
}

export default App;