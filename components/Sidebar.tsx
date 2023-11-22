"use client"

import Link from "next/link";
import {Orbitron} from "next/font/google";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import MainIcon from "@/utils/MainIcon";
// @ts-ignore
import {UilApps, UilArrow, UilCommentAlt, UilImageV, UilMusic, UilSetting, UilVideo} from '@iconscout/react-unicons'

const orbitron = Orbitron({weight: ["600", "400", "500", "700", "800", "900"], subsets: ["latin"]})

const routes = [{
    label: "Dashboard", icon: UilApps, href: "/dashboard",
}, {
    label: "Conversation", icon: UilCommentAlt, href: "/conversation",
}, {
    label: "Image Generation", icon: UilImageV, href: "/image",
}, {
    label: "Video Generation", icon: UilVideo, href: "/video",
}, {
    label: "Code Generation", icon: UilArrow, href: "/code",
}, {
    label: "Settings", icon: UilSetting, href: "/settings",
}]

const Sidebar = () => {

    const pathName = usePathname()
    return <div className={` space-y-4 py-4 flex flex-col h-full bg-white border-r-black/5 border-r text-black`}>
        <div className={`px-3 py-2  flex-1`}>
            <Link href={"/dashboard"} className={`mb-14 flex items-center pl-4 justify-start gap-2`}>
                {<MainIcon/>}
                <h1 className={cn("text-2xl font-bold  text-center", orbitron.className)}> AI Fusion
                </h1>
            </Link>
            <div className={`space-y-1`}>
                <div className="flex flex-1 items-center flex-col space-y-2">
                    {routes.map((route) => <Link href={route.href} key={route.href}
                                                 className={cn(`w-full flex justify-start text-base group font-medium cursor-pointer p-3 group hover:text-white hover:bg-indigo-700 rounded-lg transition border-black/5 border`, pathName === route.href ? " text-center text-white bg-indigo-700" : " ")}>
                        <route.icon className={cn("h-6 w-6 mr-3 group-hover:text-white",)}/>
                        {route.label}
                    </Link>)}
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar
