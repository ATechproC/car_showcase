import "./globals.css";
import { Metadata } from "next";

import { Footer, NavBar } from "../components";
import { ModalProvider } from "contexts/ModalContext";
import { CarDetailsProvider } from "contexts/CarDetailsModal";
import { OverlayProvider } from "contexts/OverlayContext";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <ModalProvider>
          <CarDetailsProvider>
            <OverlayProvider>
            <NavBar />
            {children}
            <Footer />
            </OverlayProvider>
          </CarDetailsProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
