import Map from './Map'
import Sidebar from './Sidebar';

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
            <Sidebar markers={markers} setMarkers={setMarkers} map={map}/>
            <Map markers={markers} setMarkers={setMarkers} setCurrMarker={props.setCurrMarker} setMap={setMap} setIsPopupVisible={props.setIsPopupVisible}/>
        </div>
    )
}

export default MainContainer