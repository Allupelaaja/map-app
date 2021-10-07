import Header from './components/Header'
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import { useState, useEffect } from 'react';

function App() {

  var initialStorage = JSON.parse(sessionStorage.getItem('markers'))

  if (!initialStorage) {
    initialStorage = []
  }

  const [markers, setMarkers] = useState(initialStorage);

  useEffect(() => {
    console.log(markers)
    sessionStorage.setItem('markers', JSON.stringify(markers))
  }, [markers]);

  return (
    <div style={{height: '100%'}}>
      {/* <Header /> */}
      <MainContainer markers={markers} setMarkers={setMarkers}/>
      <Footer />
    </div>
  );
}

export default App;
