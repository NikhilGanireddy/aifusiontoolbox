import Image from "next/image";
import empty from "../public/empty.png"

interface EmptyProps {
    label: String
}

export const Empty = ({label}: EmptyProps) => {
    return <div className={`h-full flex flex-col p-20 items-center justify-center`}>
        <div className={`relative h-72 w-72`}>
            <Image src={empty} alt={"empty image"} fill={true} priority/>
        </div>
        <p className={`text-muted-foreground text-center text-sm`}>
            {label}
        </p>
    </div>
}
