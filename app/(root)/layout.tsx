import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

import "../globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Threads", description: "A Next.js 13 Meta Threads application",
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