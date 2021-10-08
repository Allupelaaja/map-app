import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { useMapEvents, Marker, Popup } from "react-leaflet";

function AddMarkerToClick(props) {

    const markers = props.markers
    const setMarkers = props.setMarkers

    function removeMarker(marker) {
        const index = markers.indexOf(marker);
        if (index > -1) {
            var newMarkers = [...markers]
            newMarkers.splice(index, 1);
            setMarkers(newMarkers)
        }
        console.log("marker removed")
    }

    useMapEvents({
        click(e) {
            props.setCurrMarker(e.latlng)
            props.setIsPopupVisible(true)
        },
    })

    return (
        <>
            {markers.map(marker =>
                <Marker key={marker.lat + ' ' + marker.lng} position={marker} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                    <Popup>
                        <div>
                            <p>Marker is at {marker.lat}, {marker.lng}</p>
                            <p>Marker name: {marker.name}</p>
                            {marker.address !== '' ? <p>Address: {marker.address}</p> : <></>}
                            <p>Open hours: {marker.startTime} - {marker.stopTime}</p>
                            {marker.isOpen ? <p>Currently open</p> : <p>Currently closed</p>}
                            <button onClick={() => removeMarker(marker)}>Remove marker</button>
                        </div>
                    </Popup>
                </Marker>
            )}
        </>
    )
}

export default AddMarkerToClick