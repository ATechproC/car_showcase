import "./globals.css";
import { Metadata } from "next";

import { Footer, NavBar } from "../components";
import { CarDetailsProvider } from "contexts/CarDetailsModal";
import { OverlayProvider } from "contexts/OverlayContext";
import Top from "@components/Top";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <CarDetailsProvider>
          <OverlayProvider>
            <NavBar />
            <Top />
            {children}
            <Footer />
          </OverlayProvider>
        </CarDetailsProvider>
      </body>
    </html>
  );
}
