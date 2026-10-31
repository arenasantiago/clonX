import { Link } from "react-router";
import { currentUser } from "../users/currentUser";
import UserCounter from "../users/components/UserCounter";

export default function HomePage() {

  return (
    <>
    <section className= "p-4">
      <UserCounter user={currentUser}/>
      <Link to="/compose" className="mt-4 inline-block rounded bg-black px-4 py-2 text-white">
        Tweet
      </Link>
    </section>
    <Link to="/feed" className="ml-4 inline-block underline">
    Feed
    </Link>
    </>
  )
}
