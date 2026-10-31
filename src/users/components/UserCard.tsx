import type { User } from "../types";
import FollowButton from "./FollowButton";

type UserCardProps = {
    user: User;
    showFollowButton?: boolean;
}

export default function UserCard({ user, showFollowButton = false }: UserCardProps) {
    return (
        <article className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-4 transition-colors hover:bg-slate-50/70 sm:px-6">
            <div className="min-w-0">
                <p className="truncate font-bold text-slate-950">{user.displayName}</p>
                <p className="truncate text-sm text-slate-500">@{user.username}</p>
            </div>
            {showFollowButton && <FollowButton />}
        </article>
    )
}