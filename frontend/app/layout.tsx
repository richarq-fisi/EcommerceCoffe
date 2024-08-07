import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Ecommerce",
  description: "Welcome to my Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        <Footer/>
      </ThemeProvider>
        </body>
    </html>
  );
}
