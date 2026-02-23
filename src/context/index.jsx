import {createContext, useState, useContext, useEffect, useCallback, useRef} from "react";

const AppContext = createContext(null);

export function AppWrapper({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const searchWrapRef = useRef(null);

    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleSearch = () => {
        setIsOpen(true);
    };

    const closeSearch = () => {
        setIsOpen(false);
    };

    // Close search when clicking outside the search box
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchWrapRef.current && !searchWrapRef.current.contains(event.target)) {
                // closeSearch();
            }
        };

        document.body.addEventListener("click", handleClickOutside);
        return () => document.body.removeEventListener("click", handleClickOutside);
    }, []);

    const openSidebar = () => {
        setIsInfoOpen(true);
        setIsOverlayOpen(true);
    };

    const closeSidebar = () => {
        setIsInfoOpen(false);
        setIsOverlayOpen(false);
    };

    return (
        <AppContext.Provider value={{
            isOpen, toggleSearch, closeSearch, searchWrapRef,
            isInfoOpen, isOverlayOpen, openSidebar, closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}