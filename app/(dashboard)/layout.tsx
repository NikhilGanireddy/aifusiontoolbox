import {ClerkProvider} from "@clerk/nextjs";
import "../globals.css"
import {Inter} from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata = {
    title: "Threads", description: "A Nextjs 13 threads app made by nikhil ganireddy"
}

const inter = Inter({subsets: ["latin"]})
export default function RootLayout({children}: { children: React.ReactNode }) {
    return (<ClerkProvider>
        <html lang={"en"}>
        <body className={`${inter.className}`}>
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
