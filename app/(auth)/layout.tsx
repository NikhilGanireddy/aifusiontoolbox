import {ClerkProvider} from "@clerk/nextjs";
import "../globals.css"
import {Inter} from "next/font/google";

export const metadata = {
    title: "AI Fusion Toolbox", description: "A Nextjs 13 AI Saas platform app made by nikhil ganireddy"
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
