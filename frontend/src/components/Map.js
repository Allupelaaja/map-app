import { MapContainer, TileLayer } from "react-leaflet";
import AddMarkerToClick from '../functions/AddMarkerToClick'
import 'leaflet/dist/leaflet.css';
import { useState } from "react";

function Map(props) {

    const [mainWidth, setMainWidth] = useState('75%')

    // function onResize() {
    //     if (window.innerWidth < 1000) {
    //         setMainWidth('100%')
    //     } else {
    //         setMainWidth('75%')
    //     }
    // }

    // window.addEventListener("resize", onResize);

    const styles = {
        map: {
            height: "100%",
            width: "100%",
            position: 'absolute',
        },
        main: {
            float: 'left',
            width: mainWidth,
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
                    whenCreated={props.setMap}
                >
                    <AddMarkerToClick markers={props.markers} setMarkers={props.setMarkers} setCurrMarker={props.setCurrMarker} setIsPopupVisible={props.setIsPopupVisible} />
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