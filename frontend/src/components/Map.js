/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from 'react';
import AddMarkerToClick from './AddMarkerToClick'
import 'leaflet/dist/leaflet.css';

function Map(props) {

    const styles = {
        map: {
            height: "100%",
            width: "100%",
            position: 'absolute',
        },
        main: {
            float: 'left',
            position: 'relative',
        },
        container: {

        }
    };

    const defaultPosition = [60.17054205960518, 24.9414674394951];

    function MapControl() {
        const map = useMap()

        useEffect(() => {
            map.invalidateSize()
        }, [map])

        return (null)
    }

    return (
        <div style={styles.main} id={'map'}>
            <div className="map__container" style={styles.container}>
                <MapContainer
                    center={defaultPosition}
                    zoom={13}
                    style={styles.map}
                    whenCreated={props.setMap}
                >
                    <MapControl />
                    <AddMarkerToClick markers={props.markers}
                        setMarkers={props.setMarkers} setCurrMarker={props.setCurrMarker}
                        setIsPopupVisible={props.setIsPopupVisible} />
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </div>
    );
}

export default Map