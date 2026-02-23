// All min.css
import './assets/css/all.min.css';
// Animate.css
import './assets/css/animate.css';
// meanmenu css
import './assets/css/meanmenu.css';
// Nice Select.css
import './assets/css/nice-select.css';
// Icomon.css
import './assets/css/icomon.css';
// Main.scss
import './assets/css/main.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css'
import AppRoutes from './routes.jsx';
import ScrollToTop from "@/lib/ScrollToTop.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
