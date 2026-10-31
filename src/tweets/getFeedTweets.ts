import type { User } from "../users/types";
import { mockTweets } from "./mockTweets";
import type { Tweet } from "./types";

export default function getFeedTweets(user: User): Tweet[] {
  const authorIds = [user.id, ...user.following];

  return mockTweets.filter((tweet) => authorIds.includes(tweet.authorId));
}