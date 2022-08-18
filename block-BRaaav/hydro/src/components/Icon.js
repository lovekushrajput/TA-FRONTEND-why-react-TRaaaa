function Icon(props) {
    return (
        <li className="social-media-item">
            <a href="#"><i className={props.val}></i></a>
        </li>
    )

}

export default Icon;