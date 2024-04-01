import { Marker, Popup } from "react-leaflet";
import "./Pin.scss";
import { Item } from "../../types/Item";
import { Link } from "react-router-dom";

interface Props {
  item: Item;
}

const Pin = ({ item }: Props) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className='popupContainer'>
          <img src={item.img} alt='' />
          <div className='textContainer'>
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
