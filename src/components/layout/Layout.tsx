import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className={`w-full h-full overflow-hidden`} style={{ height: '100vh' }}>
      <Header />
      <div className={`w-full bg-red-100 overflow-auto`} style={{ height: 'calc(100vh - 150px)' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
