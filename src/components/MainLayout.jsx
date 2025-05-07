import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
