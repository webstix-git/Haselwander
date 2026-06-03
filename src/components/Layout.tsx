import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[116px] min-[1140px]:max-[1250px]:pt-[91px] min-[1251px]:max-[1350px]:pt-[88px]">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
