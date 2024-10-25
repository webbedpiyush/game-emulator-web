import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 bg-primary p-4 lg:p-8 rounded-tl-xl overflow-auto">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
