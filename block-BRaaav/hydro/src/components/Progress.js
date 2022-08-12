function Progress(props) {
    return (
        <div className="progress-item">
            <div className="flex">
                <h3>{props.name}</h3>
                <p>{props.score}%</p>
            </div>
            <progress value={String(props.score)} max="100"></progress>
        </div>
    )
}


export default Progress;