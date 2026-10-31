import { Link } from "react-router";
import { currentUser } from "../users/currentUser";
import UserCounter from "../users/components/UserCounter";

export default function HomePage() {

  return (
    <>
    <section className="p-5 sm:p-6">
      <UserCounter user={currentUser}/>
      <Link to="/compose" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 font-bold text-white shadow-sm transition-all hover:bg-sky-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
        Tweet
      </Link>
    </section>
    <Link to="/feed" className="mx-5 mb-5 inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 font-bold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:mx-6">
    Feed
    </Link>
    </>
  )
}
