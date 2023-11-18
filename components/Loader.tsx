import Image from "next/image";
import logo from "../public/logo.png"

export const Loader = () => {
    return <div className={` h-full flex justify-center items-center flex-col gap-y-4 `}>
        <div className={` w-10 h-10 relative animate-spin`}>
            <Image src={logo} alt={"logo"}/>
        </div>
        <p>AI Fusion Toolbox is thinking...</p>
    </div>
}

