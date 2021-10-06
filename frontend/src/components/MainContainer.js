import Map from './Map'
import Sidebar from './Sidebar';

function MainContainer(props) {

    const markers = props.markers
    const setMarkers = props.setMarkers

    const styles = {
        container: {
            display: 'flex',
            height: '85%'
        }
    }

    return (
        <div style={styles.container}>
            <Sidebar markers={markers} setMarkers={setMarkers} />
            <Map markers={markers} setMarkers={setMarkers} />
        </div>
    )
}

export default MainContainer