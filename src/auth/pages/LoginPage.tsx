import { Link } from "react-router";
import FormField from "../../ui/FormField";

export default function LoginPage() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    }

    return (
        <section className="mx-auto min-h-screen max-w-md px-5 py-10 sm:px-6 sm:py-16">
            <h1 className="mb-7 text-center text-3xl font-extrabold tracking-tight text-slate-950">Log in to ClonX</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FormField id="username" label="Username" />
                <FormField id="password" label="Password" type="password" />
                <Link to="/" className="mt-1 inline-flex items-center justify-center min-h-11 rounded-full bg-sky-500 px-4 font-bold text-white transition-colors hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                Log in
                </Link>
            </form>
            <button type="button" className="mt-4 min-h-11 w-full rounded-full border border-slate-300 bg-white px-4 font-bold text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                Log in with Google
            </button>
            <p className = "mt-6 text-center text-sm text-slate-600">
                New here? <Link to="/register" className="font-semibold text-sky-600 hover:underline">Sign up</Link>
            </p>
        </section>
    )
}
