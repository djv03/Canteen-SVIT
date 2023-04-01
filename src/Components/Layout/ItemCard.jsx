import "./ItemCard.css";

const ItemCard = (props) => {
  return (
    <div className="item-card">
      <img src={props.itemImage} />
      <h3>{props.itemName}</h3>
      <section className="price-details">
        <p>Quantity : {props.itemQuantity}</p>
        <h2>₹{props.itemPrice}</h2>
      </section>
    </div>
  );
};

export default ItemCard;
