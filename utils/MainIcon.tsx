import Image from "next/image";
import slack from "../public/slack.png"

const MainLogo = () => {
    return <Image src={slack} alt={"slack"} width={100} height={100} className={`w-10 h-10`}/>
}
export default MainLogo
