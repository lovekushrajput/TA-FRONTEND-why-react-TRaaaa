let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
]

function handleClick(e) {
    let value = e.target.innerText
    alert(value)
}

function Btn(props) {
    return (
        <button onClick={handleClick}>{props.value}</button>
    )
}


function Fruitbtns() {
    return (
        fruits.map((fruit) => <Btn key={fruit.id} {...fruit} />)
    )
}



export default Fruitbtns;