import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import icon from "../assets/estonian.png"
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;



function Map() {
  return (
    <div>
       <MapContainer className="map" center={[59.425, 24.783]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.426, 24.724]}>
          <Popup>
           <a href="https://www.google.com/maps/search/kristiine/@59.4249244,24.7091225,14.83z?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D">
              Welcome to our store
           </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map