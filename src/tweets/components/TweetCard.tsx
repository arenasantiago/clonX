import type { User } from "../../users/types"
import { formatTweetDate } from "../formatTweetDate"
import type { Tweet } from "../types"

type TweetCardProps = {
    tweet: Tweet
    author: User
}

export default function TweetCard({ tweet, author }: TweetCardProps) {
  return (
    <article className="border-b border-slate-200 px-4 py-4 transition-colors hover:bg-slate-50/70 sm:px-6">
        <header className="flex flex-wrap items-baseline gap-1">
            <span className="font-bold text-slate-950">{author.displayName}</span>
            <span className="text-sm text-slate-500">
                @{author.username} - <time dateTime={tweet.createdAt}>{formatTweetDate(tweet.createdAt)}</time>
            </span>
        </header>
        <p className="mt-2 whitespace-pre-wrap leading-6 text-slate-800">{tweet.content}</p>
    </article>
  )
}
