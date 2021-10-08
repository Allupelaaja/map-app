import Header from './components/Header'
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

  useEffect(() => {
    console.log(markers)
    sessionStorage.setItem('markers', JSON.stringify(markers))
  }, [markers]);

  return (
    <div style={{ height: '100%' }}>
      {/* <Header /> */}
      <MainContainer markers={markers} setMarkers={setMarkers} map={map} setMap={setMap} setIsPopupVisible={setIsPopupVisible} setCurrMarker={setCurrMarker}/>
      <Footer />
      {isPopupVisible ? <Popup markers={markers} setMarkers={setMarkers} currMarker={currMarker} setCurrMarker={setCurrMarker} setIsPopupVisible={setIsPopupVisible} /> : <></>}
    </div>
  );
}

export default App;
