import { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from 'components/common/Footer/Footer';
import Header from 'components/common/Header/Header';
import { Layout, Wrapper } from './SharedLayout.styled';
import MobMenu from 'components/common/MobMenu/MobMenu';
import PageLoader from 'components/common/PageLoader/PageLoader';

export default function SharedLayout() {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  const isMainPage = path === '/';
  const isRecipePage = path.includes('/recipe/');

  const toggleMenu = () => {
    const menuStatus = isMobMenuOpen ? false : true;
    setIsMobMenuOpen(menuStatus);
  };

  return (
    <>
      <Wrapper>
        <Layout $isMainPage={isMainPage} $isRecipePage={isRecipePage}>
          <Header toggleMenu={toggleMenu} />
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </Layout>
        <Footer />
      </Wrapper>

      <MobMenu toggleMenu={toggleMenu} isOpen={isMobMenuOpen} />
    </>
  );
}
