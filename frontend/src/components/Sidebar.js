import { useState } from "react";

function Sidebar(props) {

    const [sidebarDisplay, setSidebarDisplay] = useState('block')

    const styles = {
        sidebar: {
            display: sidebarDisplay,
            height: '100%',
            top: '0',
            left: '0',
            textAlign: 'center',
            float: 'left',
            width: '25%',
            backgroundColor: 'lightblue',
        },
        marker: {
            backgroundColor: '#c1e7f3',
            borderRadius: '15px',
            margin: '5px',
            padding: '25px'
        },
        markers: {
            overflowY: 'auto',
            height: '80%',
        },
        headerDiv: {
        },
        buttonDiv: {
            display: 'flex',
            padding: '25px',
            justifyContent: 'center',
        }
    };

    function onResize() {
        if (window.innerWidth < 1000) {
            setSidebarDisplay('none')
        } else {
            setSidebarDisplay('block')
        }
    }

    window.addEventListener("resize", onResize);

    const markers = props.markers
    const setMarkers = props.setMarkers

    function clearMarkers() {
        setMarkers([])
        sessionStorage.clear()
    }

    function removeMarker(marker) {
        const index = markers.indexOf(marker);
        if (index > -1) {
            var newMarkers = [...markers]
            newMarkers.splice(index, 1);
            setMarkers(newMarkers)
        }
        console.log("marker removed")
    }

    return (
        <div style={styles.sidebar}>
            <div style={styles.headerDiv}>
                <div style={styles.buttonDiv}>
                    <p style={{ marginRight: '25px' }}>List of markers</p>
                    <button style={{ marginLeft: '25px' }} onClick={() => clearMarkers()}>Clear all markers</button>
                </div>
            </div>
            <div style={styles.markers}>
                {markers.map(marker =>
                    <div key={marker.lat + ' ' + marker.lng} style={styles.marker}>
                        <p>{markers.indexOf(marker) + 1}. Marker: {marker.lat + ' ' + marker.lng}</p>
                        {marker.address !== '' ? <p>Address: {marker.address}</p> : <></>}
                        <button onClick={() => removeMarker(marker)}>Delete marker</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar