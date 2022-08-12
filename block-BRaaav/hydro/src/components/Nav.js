function Nav(props) {
    return (
        <>
            <li>
                <a href="#">{props.value}</a>
            </li>
        </>
    )
}

export default Nav;

// {nav.map((elm) => <Nav key={elm} value={elm} />)}