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
            zIndex: '15000',
        },
        popupBox: {
            position: 'absolute',
            backgroundColor: 'white',
            borderRadius: '15px',
            overflowY: 'auto',
        },
        popupBoxContent: {
            left: '50%',
            top: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
        }
    }

    const [markerName, setMarkerName] = useState('')
    const [markerStartTime, setMarkerStartTime] = useState('')
    const [markerStopTime, setMarkerStopTime] = useState('')
    const markers = props.markers
    const setMarkers = props.setMarkers
    const currMarker = props.currMarker
    const setCurrMarker = props.setCurrMarker
    const setIsPopupVisible = props.setIsPopupVisible

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
            if (newAddress.address) {
                if (newAddress.address.road && newAddress.address.house_number) {
                    addressString = newAddress.address.road + ' ' + newAddress.address.house_number
                } else if (newAddress.address.road) {
                    addressString = newAddress.address.road
                }
            }
        }
        marker.address = addressString
        setMarkers([...markers, marker]);
        setCurrMarker(null)
    }

    function handleSubmit(event) {
        event.preventDefault()
        var newMarker = currMarker
        newMarker.name = markerName
        newMarker.startTime = markerStartTime
        newMarker.stopTime = markerStopTime
        addToMarkers(newMarker)
        setIsPopupVisible(false)
    }

    return (
        <div style={styles.popupBackground} onClick={() => setIsPopupVisible(false)}>
            <div style={styles.popupBox} id={'popupBox'} onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit} style={styles.popupBoxContent}>
                    <h1>Marker information</h1>
                    <p id={'popupText'}>
                        Name:
                        <input required type="text" name="name" value={markerName} onChange={event => { setMarkerName(event.target.value) }} />
                    </p>
                    <p id={'popupText'}>
                        Open from:
                        <input required type="time" name="name" value={markerStartTime} onChange={event => { setMarkerStartTime(event.target.value) }} />
                    </p>
                    <p id={'popupText'}>
                        Open to:
                        <input required type="time" name="name" value={markerStopTime} onChange={event => { setMarkerStopTime(event.target.value) }} />
                    </p>
                    <p>
                        <input id={'popupButton'} type="submit" value="Submit" />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Popup