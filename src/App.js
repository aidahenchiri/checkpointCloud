import logo from './logo.svg';
import './App.css';

function App() {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  return (
    <div className="App">

<Map location={location}/>

    </div>
  );
}


export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(App)
