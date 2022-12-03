import "./TopMain.css";

const TopMain = () => {
  return (
    <div className="TopMain">
      <div className="img-container">
        <img src={require("../../../images/restaurant.jpg")} alt="" />
      </div>
      <div className="delicious-food-modal">
        <h1>Delicious food, Delivered to you</h1>
        <p>
          choose your favorite meal from our broad selection of available meals,
          and enjoy your lunch or dinner at home.
        </p>
        <p>
          all our meals are cooked with high quality chefs, at the best kitchen
          with the best conditions.
        </p>
      </div>
    </div>
  );
};

export default TopMain;
