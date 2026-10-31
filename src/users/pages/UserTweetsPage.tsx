import { useParams } from "react-router";
import getUsersByUsername from "../getUsersByUsername";
import sortTweetsByNewest from "../../tweets/sortTweetsByNewst";
import getTweetByAuthor from "../../tweets/getTweetByAuthor";
import { usePagination } from "../../ui/usePagination";
import UserCounter from "../components/UserCounter";
import canFollow from "../canFollow";
import FollowButton from "../components/FollowButton";
import TweetCard from "../../tweets/components/TweetCard";
import Pagination from "../../ui/Pagination";

export default function UserTweetsPage() {
    const { username } = useParams();
    const user = getUsersByUsername(username);
    const tweets = user ? sortTweetsByNewest(getTweetByAuthor(user.id)): [];
    const { pageItems, page, totalPages, hasPrevious, hasNext, previous, next } = usePagination(tweets);

    if(!user) {
        return <p className="text-red-500 p-4">User not found</p>
    }
  return (
    <section className="min-h-full">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-5 sm:px-6">
            <div>
                <h1 className="text-xl font-extrabold sm:text-2xl">{user.displayName}</h1>
                <p className="mb-3 mt-1 text-sm text-slate-500">@{user.username}</p>
                <UserCounter user={user}/>
            </div>
            {canFollow(user) && <FollowButton/>}
        </div>
        {pageItems.map((tweet)=>(
            <TweetCard key={tweet.id} tweet={tweet} author={user}/>
        ))}
        <Pagination
            page={page}
            totalPages ={totalPages}
            hasPrevious={hasPrevious}
            hasNext={hasNext}
            previous={previous}
            next={next}
        />
    </section>
  )
}
