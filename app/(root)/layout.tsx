import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

import "../globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "AI Fusion Toolbox", description: "A Nextjs 13 AI Saas platform app made by nikhil ganireddy",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (<ClerkProvider>
        <html lang='en'>
        <body className={`${inter.className} min-h-full `}>
        {children}
        </body>
        </html>
    </ClerkProvider>);
}
