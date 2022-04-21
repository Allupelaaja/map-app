function TimeStatus(props) {

    const marker = props.marker
    const sTime = marker.startTime
    const eTime = marker.stopTime

    function timeComparison() {
        const currentdate = new Date()
        currentdate.setFullYear(1996)
        currentdate.setMonth(2)
        currentdate.setDate(13)

        const startDate = new Date()
        let [h1, m1] = sTime.split(':')
        startDate.setFullYear(1996)
        startDate.setMonth(2)
        startDate.setDate(13)
        startDate.setHours(+h1)
        startDate.setMinutes(m1)

        const endDate = new Date()
        let [h2, m2] = eTime.split(':')
        endDate.setFullYear(1996)
        endDate.setMonth(2)
        endDate.setDate(13)
        endDate.setHours(+h2)
        endDate.setMinutes(m2)

        //check if location is open or not
        if (+currentdate >= +startDate && currentdate < endDate) {
            return true
        } else if (endDate < startDate && (currentdate < endDate || currentdate > startDate)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            {timeComparison() ? <p>Currently open</p> : <p>Currently closed</p>}
        </div>
    )
}

export default TimeStatus