import {ClerkProvider} from "@clerk/nextjs";
import "../globals.css"
// import {Inter} from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
// import {Orbitron} from "next/font/google";
import {Syne} from "next/font/google";

export const metadata = {
    title: "AI Fusion", description: "An AI Saas platform made using Nextjs",
}

// const inter = Inter({subsets: ["latin"]})
// const orbitron = Orbitron({weight: ["600", "400", "500", "700", "800", "900"], subsets: ["latin"]})
const syne = Syne({weight: ["600", "400", "500", "700", "800", ], subsets: ["latin"]})


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (<ClerkProvider>
        <html lang={"en"}>
        <body className={`${syne.className}`}>
        <div className={` h-full relative`}>
            <div className={` hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 z-[80] bg-gray-900`}>
                <Sidebar/>
            </div>
            <main className={` md:pl-72`}>
                <Navbar/>
                {children}
            </main>
        </div>
        </body>
        </html>
    </ClerkProvider>)
}
