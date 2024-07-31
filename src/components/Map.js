import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/styles/Map.css';
import L from 'leaflet';

const icons = {
  centro: new L.Icon({
    iconUrl: require('../assets/images/centroHistorico.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  alcantara: new L.Icon({
    iconUrl: require('../assets/images/alcantara.jpg'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  lencois: new L.Icon({
    iconUrl: require('../assets/images/lencois.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  atins: new L.Icon({
    iconUrl: require('../assets/images/praiaAtins.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  chapada: new L.Icon({
    iconUrl: require('../assets/images/chapadaMesas.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  itapecuru: new L.Icon({
    iconUrl: require('../assets/images/cachoeiraItapecuru.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
};

const Map = () => {
  const locations = [
    { position: [-2.529168, -44.306253], name: "Centro Histórico de São Luís", type: "centro" },
    { position: [-2.486174, -43.128568], name: "Parque Nacional dos Lençóis Maranhenses", type: "lencois" },
    { position: [-2.408034, -44.417814], name: "Centro Histórico de Alcântara", type: "alcantara" },
    { position: [-7.145804452290727, -47.132431070476045], name: "Parque Nacional da Chapada das Mesas", type: "chapada" },
    { position: [-7.416722331121783, -47.21530815204892], name: "Cachoeira do Itapecuru", type: "itapecuru" },
    { position: [-2.5694814905589087, -42.74222078299075], name: "Praia de Atins", type: "atins" },
  ];

  return (
    <div className="map-container">
      <MapContainer center={[-4.3538394605109465, -45.2359505399896]} zoom={6} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((loc, index) => (
          <Marker key={index} position={loc.position} icon={icons[loc.type]}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
