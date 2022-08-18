function Boxes(props) {

    return (
        <div>
            <div className="div" style={{ backgroundColor: props.color }}></div>
            <div className="flex">
                <h3>{props.index === 0 ? 50 : props.index * 100}</h3>
                <span className='text-light'>{props.color}</span>
            </div>
        </div>
    )
}

export default Boxes;