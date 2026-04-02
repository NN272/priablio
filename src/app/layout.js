import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// For basic functionality
import "@glidejs/glide/dist/css/glide.core.min.css";

// Optional: for default styling (arrows, bullets)
import "@glidejs/glide/dist/css/glide.theme.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PRIABLIO",
  description: "Video ai design",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{
        scrollBehavior: "smooth"
      }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
