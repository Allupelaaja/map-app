import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import { useEffect } from 'react';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';

function Map(props) {

    const markers = props.markers
    const setMarkers = props.setMarkers

    function AddMarkerToClick() {

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
            },
        })

        return (
            <>
                {markers.map(marker =>
                    <Marker key={marker.lat + ' ' + marker.lng} position={marker} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
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

    const styles = {
        map: {
            height: "100%",
            width: "100%",
            position: 'absolute',
        },
        main: {
            float: 'left',
            width: '75%',
            position: 'relative',
        }
    };

    const defaultPosition = [60.17054205960518, 24.9414674394951];

    return (
        <div style={styles.main}>
            <div className="map__container">
                <MapContainer
                    center={defaultPosition}
                    zoom={13}
                    style={styles.map}
                >
                    <AddMarkerToClick />
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </div>

    );
};

export default Map