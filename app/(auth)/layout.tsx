import {ClerkProvider} from "@clerk/nextjs";
import "../globals.css"
import {Inter} from "next/font/google";

export const metadata = {
    title: "AI Fusion", description: "An AI Saas platform made using Nextjs",
}

const inter = Inter({subsets: ["latin"]})
export default function RootLayout({children}: { children: React.ReactNode }) {
    return (<ClerkProvider>
        <html lang={"en"}>
        <body className={`${inter.className} flex justify-center  items-center min-h-screen`}>
        {children}
        </body>
        </html>
    </ClerkProvider>)
}
