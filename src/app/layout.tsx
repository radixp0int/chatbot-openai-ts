import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatAssistant from "./components/ChatAssistant";
import Providers from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume Virtual Assistant",
  description:
    "Your virtual assistant for asking questions and getting answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>
        <ChatAssistant />
        {children}</body>
      </Providers>
    </html>
  );
}
