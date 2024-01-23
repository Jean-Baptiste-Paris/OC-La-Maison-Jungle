function CareScale({careType, scaleValue}) {
    const range = [1, 2, 3]

    const scaleType = (careType === 'light' && '☀️') || (careType === 'water' && '💧')

    return (
        <div>
            {range.map((rangeScale) =>
                scaleValue >= rangeScale && <span key={rangeScale.toString()}>{scaleType}</span>
            )}
        </div>
    )
}

export default CareScale