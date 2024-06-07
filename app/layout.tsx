import { Toaster } from "@/components/ui/sonner";
import { AuthContextProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { NextUIProvider } from "@nextui-org/system";
import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = GeistSans;

export const metadata: Metadata = {
  title: "DKM Consulting",
  description: "Simplifiez votre voyage vers le Canada avec DKM Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(`${geistSans.className} antialiased`, "bg-background")}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
