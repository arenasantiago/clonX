import { mockUsers } from "./mockUsers";
import type { User } from "./types";


export default function getFollowers(userId: string):User[] {
  return mockUsers.filter(user => user.following.includes(userId));
}
