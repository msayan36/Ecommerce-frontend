import "./globals.scss";
import { Sora } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const inter = Sora({weight:[ '400',  '700', ], subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
