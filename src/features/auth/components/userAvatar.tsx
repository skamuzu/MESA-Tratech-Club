import { useUser } from "../queries";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function UserAvatar(){
    const { data } = useUser();

    return (
        <Avatar size="lg">
            <AvatarImage src={data?.image} alt="user-icon"/>
            <AvatarFallback><User/></AvatarFallback>
        </Avatar>
    )
}