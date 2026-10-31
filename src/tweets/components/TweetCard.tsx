import type { User } from "../../users/types"
import { formatTweetDate } from "../formatTweetDate"
import type { Tweet } from "../types"

type TweetCardProps = {
    tweet: Tweet
    author: User
}

export default function TweetCard({ tweet, author }: TweetCardProps) {
  return (
    <article className="border-b border-gray-200 p-4">
        <header className="flex flex-wrap items-baseline gap-1">
            <span className="font-bold">{author.displayName}</span>
            <span>
                @{author.username} - <time dateTime={tweet.createdAt}>{formatTweetDate(tweet.createdAt)}</time>
            </span>
        </header>
        <p className="mt-1 whitespace-pre-wrap">{tweet.content}</p>
    </article>
  )
}
