import { Link } from "react-router";
import FormField from "../../ui/FormField";

export default function LoginPage() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    }
    return (
        <section className= "mx-auto max-w sm p-4">
            <h1 className="mb-4 text 2xl bold">Log in to ClonX</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <FormField id="username" label="Username" />
                <FormField id="password" label="Password" type="password" />
                <button type="submit" className="rounded bg-black p-2 font-bold text-white hover:bg-black/80 ">
                Log in
                </button>
            </form>
            <button type="button" className="mt-4 w-full rounded bg-black p-2 font-bold text-white hover:bg-black/80 border border-gray-300">
                Log in with Google
            </button>
            <p className = "mt-4">
                New here? <Link to="/register">Sign up</Link>
            </p>
        </section>
    )
}
