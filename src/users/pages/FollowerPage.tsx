import { useParams } from "react-router";
import getUsersByUsername from "../getUsersByUsername";
import sortUsersByName from "../sortUsersByName";
import { usePagination } from "../../ui/usePagination";
import getFollowers from "../getFollowers";
import Pagination from "../../ui/Pagination";
import UserCard from "../components/UserCard";
import canFollow from "../canFollow";


export default function FollowerPage() {
    const { username } = useParams();
    const user = getUsersByUsername(username);
    const followers = user ? sortUsersByName(getFollowers(user.id)): [];
    const { pageItems, page, totalPages, hasPrevious, hasNext, previous, next } = usePagination(followers);

    if(!user) {
        return <p className="text-red-500 p-4">User not found</p>
    }
  return (
    <section>
        <h1 className="border-b border-slate-200 p-4 text-xl font-extrabold sm:px-6 sm:text-2xl">Followers</h1>
        {pageItems.map((follower)=> (
            <UserCard key={follower.id} user={follower} showFollowButton={canFollow(follower)}/>
        ))}
        <Pagination 
        page={page} 
        totalPages={totalPages} 
        hasPrevious={hasPrevious} 
        hasNext={hasNext} 
        previous={previous} 
        next={next} />
    </section>

  )
}
