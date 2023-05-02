import HeaderNav from "@/components/header-nav";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return <>
    <HeaderNav/>
    <div className="container mx-auto px-6 my-8">{children}</div>
  </>
}

export default Layout;
