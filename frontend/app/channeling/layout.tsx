import type { Metadata } from "next";
import "./channeling.css";
import HeaderNavigation from "@/components/layout/HeaderNavigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Channeling",
  description: "Manage your appointments efficiently",
};

export default function ChannelingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HeaderNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
