import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LanguageProvider } from "@/i18n/language-provider";
import { defaultLanguage, pageDescriptions, pageTitles } from "@/i18n/config";
export const metadata: Metadata = {
    title: pageTitles[defaultLanguage],
    description: pageDescriptions[defaultLanguage],
    icons: {
        icon: { url: "/images/logo.png", type: "image/png", sizes: "192x192" },
        apple: "/images/logo.png",
    },
};
export const viewport: Viewport = { themeColor: "#075333" };
export default function RootLayout({ children }: {
    children: ReactNode;
}) {
    return (<html lang={defaultLanguage}>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            {/* eslint-disable-next-line @next/next/no-page-custom-font -- Shared App Router root layout loads these fonts for every page. */}
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </head>
        <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>);
}
