import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import { useState } from 'react';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';

function AddMarkerToClick() {

    const [markers, setMarkers] = useState([]);

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
            const newMarker = e.latlng
            setMarkers([...markers, newMarker]);
            console.log(markers)
        },
    })

    return (
        <>
            {markers.map(marker =>
                <Marker position={marker} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                    <Popup>
                        <div>
                            <p>Marker is at {marker.lat}, {marker.lng}</p>
                            <button onClick={() => removeMarker(marker)}>Remove marker</button>
                        </div>
                    </Popup>
                </Marker>
            )}
        </>
    )
}

const Map = () => {
    const defaultPosition = [60.17054205960518, 24.9414674394951];

    return (
        <div className="map__container">
            <MapContainer
                center={defaultPosition}
                zoom={13}
                style={{ height: "90vh", width: "100%" }}
            >
                <AddMarkerToClick />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default Map