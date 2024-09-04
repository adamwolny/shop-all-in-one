import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
