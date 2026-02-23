import {useAppContext} from "@/context";

export default function SearchSection() {
    const {isOpen, searchWrapRef, closeSearch} = useAppContext();

    return (
        <div className={`search-wrap ${isOpen ? "d-block" : ""}`} ref={searchWrapRef}>
            <div className="search-inner">
                <i className="fas fa-times search-close" id="search-close" onClick={closeSearch}></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search..."/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}