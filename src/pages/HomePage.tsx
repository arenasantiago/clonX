import { Link } from "react-router";
import { currentUser } from "../users/currentUser";
import getFollowers from "../users/getFollowers";

export default function HomePage() {
  const followerCount = getFollowers(currentUser.id).length;
  const followingCount = currentUser.following.length;
  return (
    <>
    <section className= "p-4">
      <div className="flex gap-4">
        <span><strong>{followerCount}</strong> Follower Count</span>
        <span><strong>{followingCount}</strong> Following Count</span>
      </div>
      <Link to="/compose" className="mt-4 inline-block rounder bg-black px-4 py-2 text-white">
        Tweet
      </Link>
    </section>

    </>
  )
}
