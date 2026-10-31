import { Link } from "react-router";
import FormField from "../../ui/FormField";

export default function RegisterPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
    return (
        <section className= "mx-auto max-w sm p-4">
            <h1 className="mb-4 text 2xl bold">Create your account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <FormField id="fullName" label="full name" />
                <FormField id="username" label="Username" />
                <FormField id="email" label="Email" type="email" />
                <FormField id="password" label="Password" type="password" />
                <button type="submit" className="rounded bg-black p-2 px-4 font-bold text-white hover:bg-black/80">Sign up</button>
            </form>

            <p className="mt-4">
                Already have an account? <Link to="/login" >Log in</Link>
            </p>
        </section>
    )
}
