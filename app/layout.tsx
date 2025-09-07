import "./globals.css";
import { Metadata } from "next";

import { Footer, NavBar } from "../components";
import { CarDetailsProvider } from "contexts/CarDetailsModal";
import { OverlayProvider } from "contexts/OverlayContext";
import Top from "@components/TopComponent";
import { InfoFormProvider } from "contexts/InfoFormContext";

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
            <InfoFormProvider>
              <NavBar />
              <Top />
              {children}
              <Footer />
            </InfoFormProvider>
          </OverlayProvider>
        </CarDetailsProvider>
      </body>
    </html>
  );
}
