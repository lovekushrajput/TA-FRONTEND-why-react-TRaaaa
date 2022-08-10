function handleClick(e) {
    let value = e.target.innerText
    alert(`Hello ${value}`)
}

function Btn(props) {
    return (
        <button onClick={handleClick}>{props.value}</button>
    )
}


function Btns() {
    return (
        <>
            <Btn value={'Arya'} />
            <Btn value={'John'} />
            <Btn value={'Bran'} />
        </>
    )
}



export default Btns;