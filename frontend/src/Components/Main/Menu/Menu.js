import { useEffect, useState } from "react";
import ItemMenu from "./ItemMenu/ItemMenu";
import axios from "axios";
import "./Menu.css";

const Menu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/items/all")
      .then((response) => setItems(response.data));
  }, []);
  return (
    <div className="Menu">
      <div className="food-menu">
        {items.map((i) => (
          <ItemMenu key={Math.random()} item={i} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
