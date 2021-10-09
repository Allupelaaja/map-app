import Map from './Map'
import Sidebar from './Sidebar';
import Sidebarmobile from './Sidebar_mobile';

function MainContainer(props) {

    const markers = props.markers
    const setMarkers = props.setMarkers
    const setMap = props.setMap
    const map = props.map

    const styles = {
        container: {
            display: 'flex',
            height: '95%'
        }
    }

    return (
        <div style={styles.container}>
            <Sidebar markers={markers} setMarkers={setMarkers} map={map} />
            <Sidebarmobile markers={markers} setMarkers={setMarkers} map={map}
                mapToggled={props.mapToggled} />
            <Map markers={markers} setMarkers={setMarkers}
                setCurrMarker={props.setCurrMarker} setMap={setMap} setIsPopupVisible={props.setIsPopupVisible}
                mapToggled={props.mapToggled} setMapToggled={props.setMapToggled} />
        </div>
    )
}

export default MainContainer