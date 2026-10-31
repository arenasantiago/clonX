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
    <section>
        <div>
            <div>
                <h1 className="text-2x1 font-bold">{user.displayName}</h1>
                <p className="mb-2 text-gray-500">@ {user.username}</p>
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
