import { Link } from "react-router";
import getFollowers from "../getFollowers";
import type { User } from "../types";

type UserCounterProps = {
    user:User;
}

export default function UserCounter({user}:UserCounterProps) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
        <Link
          to={`/user/${user.username}/following`}
          className="hover:underline"
        >
          <strong className="font-extrabold text-slate-950">{user.following.length}</strong> Following
        </Link>
        <Link
          to={`/user/${user.username}/followers`}
          className="hover:underline"
        >
          <strong className="font-extrabold text-slate-950">{getFollowers(user.id).length}</strong> Followers
        </Link>
    </div>
  )
}
