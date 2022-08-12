import Nav from './Nav';
import Icon from './Icon'
let nav = ['Home', 'About', 'Blog', 'Our Work', 'Contacts']
let icon = ["fab fa-facebook-square", "fab fa-twitter", "fab fa-instagram"]

function Header() {
    return (
        <header className="navbar">
            <div className="container flex">
                <div className="flex">
                    <a className="brand" href="#">
                        <strong>Hydro</strong>
                    </a>
                    <nav>
                        <ul className={"flex nav-menu nav-menu-primary"}>
                            {/* Nav component */}
                            {nav.map((elm) => <Nav key={elm} value={elm} />)}
                        </ul>
                    </nav>
                </div>

                <nav>
                    <ul className={"flex nav-menu nav-menu-secondary"}>
                        {/* Icon component */}
                        {icon.map((elm) => <Icon key={elm} value={elm} />)}
                        <li>
                            <a className="btn btn-primary" href="#"> Sign in / Join </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}



export default Header;