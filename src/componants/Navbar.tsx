export function Navbar() {
    return (
        <nav>
            <ul className="flex space-x-4 font-black">
                <li><a href="/" className="text-black">Dashboard</a></li>
                <li><a href="/Home" className="text-black">Home</a></li>
                <li><a href="/About" className="text-black">About</a></li>
                <li><a href="/Contact" className="text-black">Contact</a></li>
            </ul>
        </nav>
    )
}