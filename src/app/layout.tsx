import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata: Metadata = {
  title: "CV Harshit Anant",
  description: "A minimalist cv of Harshit Anant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <style>
          </style>
        </head>
        <body className="bg-background transition-colors duration-500">
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
