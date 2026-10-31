import { useParams } from "react-router";
import getUsersByUsername from "../getUsersByUsername";
import sortUsersByName from "../sortUsersByName";
import getFollowing from "../getFollowing";
import { usePagination } from "../../ui/usePagination";
import Pagination from "../../ui/Pagination";
import UserCard from "../components/UserCard";


export default function FollowingPage() {
    const { username } = useParams();
    const user = getUsersByUsername(username);
    const following = user ? sortUsersByName(getFollowing(user)): [];
    const { pageItems, page, totalPages, hasPrevious, hasNext, previous, next } = usePagination(following);

    if(!user) {
        return <p className="text-red-500 p-4">User not found</p>
    }
  return (
    <section>
        <h1 className="text-2xl font-bold p-4">Following</h1>
        {pageItems.map((followed)=> (
            <UserCard key={followed.id} user={followed} />
        ))}
        <Pagination
            page={page}
            totalPages={totalPages}
            hasPrevious={hasPrevious}
            hasNext={hasNext}
            previous={previous}
            next={next}
        />
    </section>
  )
}
