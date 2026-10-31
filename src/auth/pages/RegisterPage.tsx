import { Link } from "react-router";
import FormField from "../../ui/FormField";

export default function RegisterPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
    return (
        <section className="mx-auto min-h-screen max-w-md px-5 py-10 sm:px-6 sm:py-16">
            <h1 className="mb-7 text-center text-3xl font-extrabold tracking-tight text-slate-950">Create your account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FormField id="fullName" label="full name" />
                <FormField id="username" label="Username" />
                <FormField id="email" label="Email" type="email" />
                <FormField id="password" label="Password" type="password" />
                <button type="submit" className="mt-1 min-h-11 rounded-full bg-sky-500 px-4 font-bold text-white transition-colors hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Sign up</button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
                Already have an account? <Link to="/login" className="font-semibold text-sky-600 hover:underline">Log in</Link>
            </p>
        </section>
    )
}
