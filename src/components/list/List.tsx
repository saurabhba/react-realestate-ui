import "./List.scss";
import { listData } from "../../lib/dummydata";
import Card from "../card/Card";
const List = () => {
  return (
    <div className='list'>
      {listData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
