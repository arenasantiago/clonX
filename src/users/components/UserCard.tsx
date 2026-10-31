import type { User } from "../types";

type UserCardProps = {
    user: User
}

export default function UserCard({ user }: UserCardProps) {
    return (
        <article className="border-b border-gray-200 p-4">
            <p className="font-bold">{user.displayName}</p>
            <p className="text-gray-500">@{user.username}</p>
        </article>
    )
}