import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="bg-white">{children}</main>
    </div>
  );
}
