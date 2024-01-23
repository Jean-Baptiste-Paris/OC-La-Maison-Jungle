function CareScale(props) {
    const scaleValue = props.scaleValue
    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeScale) =>
                scaleValue >= rangeScale && <span key={rangeScale.toString()}>☀️</span>
            )}
        </div>
    )
}

export default CareScale