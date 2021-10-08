import { useState } from "react";

function Popup(props) {

    const styles = {
        popupBackground: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            margin: 'auto',
            backgroundColor: 'rgba(0,0,0, 0.5)',
            zIndex: '10000',
        },
        popupBox: {
            position: 'absolute',
            inset: '35%',
            margin: 'auto',
            backgroundColor: 'white',
            borderRadius: '15px',
        },
        popupText: {
            marginBlockStart: '0.67em',
            marginBlockEnd: '0.67em',
            marginInlineStart: '0px',
            marginInlineEnd: '0px',
        },
        popupBoxContent: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }
    }

    const [markerName, setMarkerName] = useState('')
    const [markerStartTime, setMarkerStartTime] = useState('')
    const [markerStopTime, setMarkerStopTime] = useState('')
    const setIsPopupVisible = props.setIsPopupVisible
    const markers = props.markers
    const setMarkers = props.setMarkers
    const currMarker = props.currMarker
    const setCurrMarker = props.setCurrMarker

    async function getAddressFromApi(lat, lng) {
        return fetch('https://nominatim.openstreetmap.org/reverse.php?lat=' + lat + '&lon=' + lng + '&zoom=18&format=jsonv2')
            .then((response) => response.json())
            .then((data) => {
                return data
            })
    }

    async function addToMarkers(marker) {
        const newAddress = await getAddressFromApi(marker.lat, marker.lng)
        var addressString = ''
        if (newAddress) {
            if (newAddress.address.road && newAddress.address.house_number) {
                addressString = newAddress.address.road + ' ' + newAddress.address.house_number
            } else if (newAddress.address.road) {
                addressString = newAddress.address.road
            }
        }
        marker.address = addressString
        setMarkers([...markers, marker]);
        setCurrMarker(null)
        console.log(marker)
    }

    function timeComparison(sTime, eTime) {
        const currentdate = new Date()
        currentdate.setFullYear(1996)
        currentdate.setMonth(2)
        currentdate.setDate(13)
        var starting = new Date(currentdate.toString().split(":")[0].slice(0,-2) + sTime)
        var ending = new Date(currentdate.toString().split(":")[0].slice(0,-2) + eTime)

        if (currentdate >= starting && currentdate < ending) {
            return true
        } else if (ending < starting && currentdate < ending) {
            return true
        } else {
            return false
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        var newMarker = currMarker
        newMarker.name = markerName
        newMarker.startTime = markerStartTime
        newMarker.stopTime = markerStopTime
        newMarker.isOpen = timeComparison(markerStartTime, markerStopTime)
        addToMarkers(newMarker)
        setIsPopupVisible(false)
    }

    return (
        <div style={styles.popupBackground} onClick={() => setIsPopupVisible(false)}>
            <div style={styles.popupBox} onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <div style={styles.popupBoxContent}>
                        <h1>Marker information</h1>
                        <label style={styles.popupText}>
                            Name:
                            <input required type="text" name="name" value={markerName} onChange={event => { setMarkerName(event.target.value) }} />
                        </label>
                        <label style={styles.popupText}>
                            Open from:
                            <input required type="time" name="name" value={markerStartTime} onChange={event => { setMarkerStartTime(event.target.value) }} />
                        </label>
                        <label style={styles.popupText}>
                            Open to:
                            <input required type="time" name="name" value={markerStopTime} onChange={event => { setMarkerStopTime(event.target.value) }} />
                        </label>
                        <input type="submit" value="Submit" style={styles.popupText} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Popup