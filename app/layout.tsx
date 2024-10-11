import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
