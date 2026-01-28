import { Inter } from "next/font/google";
import "./globals.css"; // <--- INI WAJIB ADA!

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio Andifa Rifqi",
  description: "Full-Stack Developer Portfolio",
   icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}