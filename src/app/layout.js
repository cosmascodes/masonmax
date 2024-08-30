import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";

const Header = dynamic(
  () => {
    return import("./components/header");
  },
  { ssr: false }
);
export const metadata = {
  title: "Masonmax Constructions",
  description: "Building the Future, One Block at a Time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
