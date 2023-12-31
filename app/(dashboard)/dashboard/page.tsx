"use client"

import {Card} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";

// @ts-ignore
import {UilApps, UilArrow, UilCommentAlt, UilImageV, UilMusic, UilSetting, UilVideo,UilArrowRight } from '@iconscout/react-unicons'

const tools = [{
    label: "Conversation",
    icon: UilCommentAlt,
    color: "text-indigo-700",
    bgColor: "bg-indigo-700/10",
    href: "/conversation"
}, {
    label: "Image Generation", icon: UilImageV, color: "text-indigo-700", bgColor: "bg-indigo-700/10", href: "/image"
}, {
    label: "Video Generation", icon: UilVideo, color: "text-indigo-700", bgColor: "bg-indigo-700/10", href: "/video"
}, {
    label: "Code Generation", icon: UilArrow, color: "text-indigo-700", bgColor: "bg-indigo-700/10", href: "/code"
}]
const Dashboard = () => {
    const router = useRouter()
    return <div>
        <div className={`mb-8 space-y-4`}>
            <h2 className={`text-2xl md:text-4xl font-bold text-center`}>Explore the Power of AI</h2>
            <p className={`text-muted-foreground font-light text-sm md:text-lg text-center`}>Chat with the most powerful
                AI ever</p>
        </div>
        <div className={`px-4 md:px-20 lg:px-32 space-y-4`}>
            {tools.map((tool) => (<Card onClick={() => router.push(tool.href)}
                                        key={tool.href}
                                        className={`border-black/5 p-4 flex items-center justify-between hover:shadow-md transition cursor-pointer`}
            >
                <div className={`flex items-center gap-x-4`}>
                    <div className={cn(" p-2 w-fit rounded-md", tool.bgColor)}>
                        <tool.icon className={cn("w-8 h-8 ", tool.color)}/>
                    </div>
                    <div className={cn("font-semibold",)}>
                        {tool.label}
                    </div>
                </div>
                <UilArrowRight  className={`w-6 h-6 `}/>
            </Card>))}
        </div>
    </div>
}

export default Dashboard
