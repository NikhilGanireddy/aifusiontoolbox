
import MainIcon from "@/utils/MainIcon";

export const Loader = () => {
    return <div className={` h-full flex justify-center items-center flex-col gap-y-4 `}>
        <div className={` w-10 h-10 relative animate-spin`}>
            <MainIcon/>
        </div>
        <p>AI Fusion Toolbox is thinking...</p>
    </div>
}

