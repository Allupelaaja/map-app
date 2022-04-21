/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import TimeStatus from './TimeStatus'

function MarkerInfo(props) {

    const markers = props.markers
    const marker = props.marker
    const setMarkers = props.setMarkers

    function removeMarker(marker) {
        const index = markers.indexOf(marker);
        if (index > -1) {
            var newMarkers = [...markers]
            newMarkers.splice(index, 1);
            setMarkers(newMarkers)
        }
    }

    return (
        <div>
            <p>{markers.indexOf(marker) + 1}. Marker: {marker.lat + ' ' + marker.lng}</p>
            <p>Marker name: {marker.name}</p>
            {marker.address !== '' ? <p>Address: {marker.address}</p> : <></>}
            <p>Open hours: {marker.startTime} - {marker.stopTime}</p>
            <TimeStatus marker={marker} />
            <button onClick={() => removeMarker(marker)}>Remove marker</button>
        </div>
    )
}

export default MarkerInfo