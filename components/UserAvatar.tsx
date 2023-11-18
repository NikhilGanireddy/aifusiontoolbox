import {useUser} from "@clerk/nextjs";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export const UserAvatar = () => {
    // const user = useUser()
    return <div>
        <Avatar className={`w-8 h-8`}>
            <AvatarImage src={useUser()?.user?.profileImageUrl}/>
            <AvatarFallback >
                {useUser().user?.firstName?.charAt(0)}
                {useUser().user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    </div>
}

export default UserAvatar
