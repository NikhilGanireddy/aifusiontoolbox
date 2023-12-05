import Image from "next/image";
import slack from "../public/slack.png"

const LoadingSkeleton = () => {

    return <div className={`w-screen h-screen flex justify-center items-center bg-white`}>
        <span className={`w-full animate-spin transition-all flex justify-center items-center`}>
            <Image src={slack} alt={"image"} width={100} height={100} className={`w-20 h-20`}/>
        </span>
    </div>
}

export default LoadingSkeleton
