import type { User } from "./types";


export default function sortUsersByName(users:User[]):User[] {
  return [...users].sort((a, b) => a.displayName.localeCompare(b.displayName))
}
