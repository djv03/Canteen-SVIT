import "./itemCard.css";

const ItemCard = (props) => {
  return (
    <div className="item-card">
      <img src={props.itemImage} />
      <h3>{props.itemName}</h3>
      <h2>{props.itemPrice}</h2>
      <p>{props.itemQuantity}</p>
    </div>
  );
};

export default ItemCard;
