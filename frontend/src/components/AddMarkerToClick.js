import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { useMapEvents, Marker, Popup } from "react-leaflet";
import MarkerInfo from './MarkerInfo';

function AddMarkerToClick(props) {

    const markers = props.markers
    const setMarkers = props.setMarkers

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
                        <MarkerInfo marker={marker} markers={markers} setMarkers={setMarkers} />
                    </Popup>
                </Marker>
            )}
        </>
    )
}

export default AddMarkerToClick