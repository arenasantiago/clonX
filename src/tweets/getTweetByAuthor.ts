import { mockTweets } from "./mockTweets";
import type { Tweet } from "./types";

export default function getTweetByAuthor(authorId: string):Tweet[] {
  return mockTweets.filter((tweet) => tweet.authorId === authorId)
}
