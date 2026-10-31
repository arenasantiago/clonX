import {Link} from "react-router";
import {mockUsers} from "../users/mockUsers";

// Temporal Login
const currentUser = mockUsers[0];

export default function Header() {
    return(
        <header>
            <Link to="/">clonX</Link>
            <span>@{currentUser.username}</span>
            <Link to="/login">Log out</Link>
        </header>
    )
}
