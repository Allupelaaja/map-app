/* eslint-disable react/react-in-jsx-scope */
import Footer from './components/Footer'
import Popup from './components/Popup'
import MainContainer from './components/MainContainer'
import { useState, useEffect } from 'react'

function App() {

  var initialStorage = JSON.parse(sessionStorage.getItem('markers'))

  if (!initialStorage) {
    initialStorage = []
  }

  const [markers, setMarkers] = useState(initialStorage)
  const [map, setMap] = useState(null)
  const [currMarker, setCurrMarker] = useState(null)
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [mapToggled, setMapToggled] = useState(false)

  useEffect(() => {
    sessionStorage.setItem('markers', JSON.stringify(markers))
  }, [markers]);

  function toggleView() {
    if (mapToggled) {
      setMapToggled(false)
    } else {
      setMapToggled(true)
    }
  }

  return (
    <div style={{ height: '100%' }}>
      <button id="listButton" onClick={() => toggleView()}>View</button>
      <MainContainer markers={markers} setMarkers={setMarkers} map={map}
        setMap={setMap} setIsPopupVisible={setIsPopupVisible} setCurrMarker={setCurrMarker}
        mapToggled={mapToggled} setMapToggled={setMapToggled} />
      <Footer />
      {isPopupVisible ? <Popup markers={markers} setMarkers={setMarkers}
        currMarker={currMarker} setCurrMarker={setCurrMarker} setIsPopupVisible={setIsPopupVisible} /> : <></>}
    </div>
  );
}

export default App;
