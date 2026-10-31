import { mockUsers } from "./mockUsers";

export default function getUsersByUsername(username?: string) {
  return mockUsers.find((user) => user.username === username)
}
