"use client"
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useUser} from "@clerk/nextjs";

export default function Home() {
    // console.log(useUser()?.user?.firstName)
    return (<div className={`w-full h-screen flex justify-center items-center flex-col gap-12`}>
        <h1>Landing Page (Unprotected)</h1>
        <div className={`flex flex-col justify-center items-center gap-y-4`}>
            {useUser()?.user ? <Button className={`bg-indigo-700 text-white`}><Link href={"/dashboard"}>Go to
                dashboard</Link></Button> : <>
                <Link href={"/sign-in"}>
                    <Button className={`bg-indigo-700 text-white`}> Login</Button>
                </Link>
                <Link href={"/sign-up"}>
                    <Button className={`bg-indigo-700 text-white`}> Register</Button>
                </Link></>}
        </div>
    </div>)
}
