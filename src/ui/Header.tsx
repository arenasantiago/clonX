import {Link} from "react-router";

import { currentUser } from "../users/currentUser";


export default function Header() {
    return(
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-2xl items-center justify-between px-4 sm:px-6" aria-label="Navegación principal">
                <Link to="/" className="rounded-full px-2 py-1 text-xl font-black tracking-tight text-sky-500 transition-colors hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Clon X</Link>
                <div className="flex items-center gap-2 text-sm sm:gap-4">
                    <span className="hidden font-medium text-slate-600 sm:inline">@{currentUser.username}</span>
                    <Link to="/login" className="rounded-full px-3 py-2 font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Log out</Link>
                </div>
            </nav>
        </header>
    )
}
