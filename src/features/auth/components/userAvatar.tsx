import { useUser } from "../queries";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserAvatar(){
    const { data } = useUser();

    return (
        <Avatar size="lg">
            <AvatarImage src={data?.image} alt="user-icon"/>
            <AvatarFallback><Skeleton className="size-10"/></AvatarFallback>
        </Avatar>
    )
}