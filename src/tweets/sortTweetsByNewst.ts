import type { Tweet } from "./types";

export default function sortTweetsByNewest(tweets:Tweet[]):Tweet[] {
  return [...tweets].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}
