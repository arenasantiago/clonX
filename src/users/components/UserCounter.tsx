import getFollowers from "../getFollowers";
import type { User } from "../types";

type UserCounterProps = {
    user:User;
}

export default function UserCounter({user}:UserCounterProps) {
  return (
    <div>
        <span><strong>{user.following.length}</strong> Following</span>
        <span><strong>{getFollowers(user.id).length}</strong> Followers</span>
    </div>
  )
}
