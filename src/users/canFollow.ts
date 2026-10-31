import { currentUser } from "./currentUser";
import type { User } from "./types";

export default function canFollow(user:User):boolean {
  return user.id !== currentUser.id && !currentUser.following.includes(user.id)
}
