import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import SideBar from "@/components/SideBar";
import PlayerWrapper from "@/components/player/PlayerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone TY Music",
  description: "Clone YouTube Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SideBar>{children}</SideBar>
          <PlayerWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
