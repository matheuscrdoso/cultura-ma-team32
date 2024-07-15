// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const Map = () => {
//   const locations = [
//     { position: [-2.529168, -44.306253], name: "Centro Histórico" },
    
//   ];

//   return (
//     <MapContainer center={[-2.53073, -44.3068]} zoom={10} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {locations.map((loc, index) => (
//         <Marker key={index} position={loc.position}>
//           <Popup>{loc.name}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default Map;


import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/styles/App.css';

const Map = () => {
  const locations = [
    { position: [-2.529168, -44.306253], name: "Centro Histórico" },
  ];

  return (
    <div className="map-container">
      <MapContainer center={[-2.53073, -44.3068]} zoom={10} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((loc, index) => (
          <Marker key={index} position={loc.position}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
