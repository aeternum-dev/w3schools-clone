

export default function Navbar () {
    return (
        <nav className="Navbar">
            <ul>
                <li><a className="active" href="0">Home</a></li>
                <li><a href="1">News</a></li>
                <li><a href="2">Contact</a></li>
                <li><a href="3">About</a></li>
                <li style={{float : "right"}}><a href="4">Status</a></li>
            </ul>
        </nav>


    );
}