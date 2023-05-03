import HeaderNav from "@/components/header-nav";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderNav />
      <div className="container mx-auto my-8 px-6">{children}</div>
    </>
  );
};

export default Layout;
