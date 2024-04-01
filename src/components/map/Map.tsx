import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { Item } from "../../types/Item";
import Pin from "../pin/Pin";

interface Props {
  items: Item[];
}

const Map = ({ items }: Props) => {
  return (
    <MapContainer
      center={[items[0].latitude, items[0].longitude]}
      zoom={7}
      scrollWheelZoom={false}
      className='map'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
