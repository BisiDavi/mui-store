import type { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Topbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
