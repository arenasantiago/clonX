import { mockUsers } from "./mockUsers";
import type { User } from "./types";

export default function getFollowing(getUserId: User):User[] {
  return mockUsers.filter(user => getUserId.following.includes(user.id))
}
