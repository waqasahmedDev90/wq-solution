import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navType = useNavigationType(); // 'PUSH', 'POP', 'REPLACE'
    const isFirstLoad = useRef(true);

    useEffect(() => {
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return; // Don't scroll on first load (let browser restore scroll)
        }

        if (navType === 'PUSH') {
            // Scroll only on client-side navigation
            window.scrollTo(0, 0);
        }
    }, [pathname, navType]);

    return null;
};

export default ScrollToTop;
