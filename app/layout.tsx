import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import Navbar from "@/components/navbar";
import Plum from "@/components/Plum";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <Navbar />
          <Plum />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
