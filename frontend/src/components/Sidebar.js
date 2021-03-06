import MarkerInfo from './MarkerInfo';

function Sidebar(props) {

    const styles = {
        sidebar: {
            height: '100%',
            top: '0',
            left: '0',
            textAlign: 'center',
            float: 'left',
            backgroundColor: 'lightblue',
            width: '25%',
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
            backgroundColor: '#9fcedd',
            overflowY: 'auto',
            maxHeight: '75%',
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

    function clearMarkers() {
        setMarkers([])
        sessionStorage.clear()
    }

    function flyToMarker(marker) {
        map.setView(marker, map.getZoom())
    }

    return (
        <div style={styles.sidebar} id={'sidebar'}>
            <div style={styles.headerDiv}>
                <h1 style={{ margin: '10px 0 0 0' }}>Maps-app</h1>
                <div style={styles.buttonDiv}>
                    <p style={{ marginRight: '25px' }}>List of markers</p>
                    {markers.length !== 0 ?
                        <button style={{ marginLeft: '25px' }} onClick={() => clearMarkers()}>Clear all markers</button>
                        : <button disabled style={{ marginLeft: '25px' }}>Clear all markers</button>}
                </div>
            </div>
            <div style={styles.markers}>
                {markers.length !== 0 ? markers.map(marker =>
                    <div key={marker.lat + ' ' + marker.lng} style={styles.marker} onClick={() => flyToMarker(marker)}>
                        <MarkerInfo marker={marker} markers={markers} setMarkers={setMarkers} />
                    </div>
                ) : (
                    <div style="background-color: #9fcedd">
                        <p>Nothing here yet...</p>
                        <p>Click on the map to add new markers</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Sidebar