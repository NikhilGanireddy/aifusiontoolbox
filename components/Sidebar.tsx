"use client"

import Link from "next/link";
import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils";
import {
    CodeIcon,
    ImageIcon,
    LayoutDashboardIcon,
    MessageSquareIcon,
    MusicIcon,
    SettingsIcon,
    VideoIcon
} from "lucide-react";
import {usePathname} from "next/navigation";

const montserrat = Montserrat({
    weight: "600", subsets: ["latin"]
})

const routes = [{
    label: "Dashboard", icon: LayoutDashboardIcon, href: "/dashboard", color: "text-sky-500"
}, {
    label: "Conversation", icon: MessageSquareIcon, href: "/conversation", color: "text-violet-500"
}, {
    label: "Image Generation", icon: ImageIcon, href: "/image", color: "text-pink-700"
}, {
    label: "Video Generation", icon: VideoIcon, href: "/video", color: "text-orange-700"
}, {
    label: "Music Generation", icon: MusicIcon, href: "/music", color: "text-emerald-500"
},{
    label: "Code Generation", icon: CodeIcon, href: "/code", color: "text-green-700"
}, {
    label: "Settings", icon: SettingsIcon, href: "/settings", color: ""
}]

const Sidebar = () => {

    const pathName = usePathname()
    return <div className={` space-y-4 py-4 flex flex-col h-full bg-gray-900 text-white`}>
        <div className={`px-3 py-2  flex-1`}>
            <Link href={"/dashboard"} className={`mb-14 flex items-center pl-4`}>
                <h1 className={cn("text-2xl font-bold text-center", montserrat.className)}>AI Fusion Toolbox</h1>
            </Link>
            <div className={`space-y-1`}>
                <div className="flex flex-1 items-center flex-col space-y-2">
                    {routes.map((route) => <Link href={route.href} key={route.href}
                                                 className={cn(`w-full flex justify-start text-sm font-medium cursor-pointer p-3 group hover:text-white hover:bg-white/10 rounded-lg transition`, pathName === route.href ? " text-center bg-white/10" : " ")}>
                        <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                        {route.label}

                    </Link>)}
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar
