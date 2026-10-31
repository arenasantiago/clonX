import type { User } from "../types";
import FollowButton from "./FollowButton";

type UserCardProps = {
    user: User;
    showFollowButton?: boolean;
}

export default function UserCard({ user, showFollowButton = false }: UserCardProps) {
    return (
        <article className="border-b border-gray-200 p-4">
            <div>
                <p className="font-bold">{user.displayName}</p>
                <p className="text-gray-500">@{user.username}</p>
            </div>
            {showFollowButton && <FollowButton />}
        </article>
    )
}