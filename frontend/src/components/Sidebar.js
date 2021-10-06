function Sidebar(props) {

    const styles = {
        sidebar: {
            height: '100%',
            top: '0',
            left: '0',
            textAlign: 'center',
            float: 'left',
            width: '25%',
            backgroundColor: 'lightblue',
        },
        marker: {
            borderStyle: 'solid',
            margin: '5px',
            padding: '25px'
        },
        markers: {
            overflowY: 'auto',
            height: '80%',
        },
        headerDiv: {
            height: '20%'
        },
        buttonDiv: {
            display: 'flex',
            padding: '25px',
            justifyContent: 'center',
        }
    };

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
                        <p>{markers.indexOf(marker) + 1}. Marker {marker.lat + ' ' + marker.lng}</p>
                        <button onClick={() => removeMarker(marker)}>Delete marker</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar