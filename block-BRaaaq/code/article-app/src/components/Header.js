function Header() {
    return (
        <header>
            <nav>
                <ul className='flex space'>
                    <li className='logo'>gizmo</li>
                    <div className='flex space nav'>
                        <li>home</li>
                        <li>about </li>
                        <li>contact</li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;