import {Link} from "react-router";

import { currentUser } from "../users/currentUser";


export default function Header() {
    return(
        <header>
            <Link to="/">clonX</Link>
            <span>@{currentUser.username}</span>
            <Link to="/login">Log out</Link>
        </header>
    )
}
