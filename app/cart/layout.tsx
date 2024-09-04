import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Your shopping cart",
  description: "Check your shopping cart",
};

export default function CartLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar showCartButton={false} />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
