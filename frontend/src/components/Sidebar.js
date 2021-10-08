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
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '15px',
            backgroundColor: 'rgb(159 206 221)',
            overflowY: 'auto',
            height: '80%',
            width: '95%'
        },
        headerDiv: {
        },
        buttonDiv: {
            display: 'flex',
            padding: '25px',
            justifyContent: 'center',
        }
    }

    const map = props.map
    const markers = props.markers
    const setMarkers = props.setMarkers

    // window.addEventListener("resize", onResize);

    // function onResize() {
    //     if (window.innerWidth < 1000) {
    //         setSidebarDisplay('none')
    //     } else {
    //         setSidebarDisplay('block')
    //     }
    // }

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

    function flyToMarker(marker) {
        map.setView(marker, map.getZoom())
    }

    return (
        <div style={styles.sidebar}>
            <div style={styles.headerDiv}>
                <h1>Maps-app</h1>
                <div style={styles.buttonDiv}>
                    <p style={{ marginRight: '25px' }}>List of markers</p>
                    <button style={{ marginLeft: '25px' }} onClick={() => clearMarkers()}>Clear all markers</button>
                </div>
            </div>
            <div style={styles.markers}>
                {markers.length !== 0 ? markers.map(marker =>
                    <div key={marker.lat + ' ' + marker.lng} style={styles.marker} onClick={() => flyToMarker(marker)}>
                        <p>{markers.indexOf(marker) + 1}. Marker: {marker.lat + ' ' + marker.lng}</p>
                        <p>Marker name: {marker.name}</p>
                        {marker.address !== '' ? <p>Address: {marker.address}</p> : <></>}
                        <p>Open hours: {marker.startTime} - {marker.stopTime}</p>
                        {marker.isOpen ? <p>Currently open</p> : <p>Currently closed</p>}
                        <button onClick={() => removeMarker(marker)}>Remove marker</button>
                    </div>
                ) : (
                    <div>
                        <p>Nothing here yet...</p>
                        <p>Click on the map to add new markers</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Sidebar