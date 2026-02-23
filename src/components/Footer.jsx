import { useLocation } from 'react-router-dom';
import FooterOne from '@/components/sections/FooterOne';
import FooterTwo from '@/components/sections/FooterTwo';
import FooterThree from '@/components/sections/FooterThree';

export default function Footer() {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <FooterOne />;
  }

  if (['/home-3', '/home-4'].includes(pathname)) {
    return <FooterThree />;
  }

  // Default to FooterTwo for all other pages including /home-2 and /home-5
  return <FooterTwo />;
}
