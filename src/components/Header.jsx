import { useLocation } from 'react-router-dom';
import HeaderOne from '@/components/HeaderOne';
import HeaderTwo from '@/components/HeaderTwo';
import HeaderThree from '@/components/HeaderThree';

export default function Header() {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return <HeaderOne />;
    }

    if (['/home-3', '/home-4'].includes(pathname)) {
        return <HeaderThree />;
    }

    // Default to HeaderTwo for all other pages including /home-2 and /home-5
    return <HeaderTwo />;
}
