function handleClick() {
    alert('Hello React Event')
}


function ClickMeBtn() {
    return (
        <button onClick={handleClick}> Click me</button>
    )
}

export default ClickMeBtn;