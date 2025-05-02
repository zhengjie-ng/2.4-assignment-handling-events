import "./Reciept.css";

function Reciept({ name, count, price }) {
  const totalPrice =
    count >= 5 ? (price * count * 0.8).toFixed(2) : (price * count).toFixed(2);
  return (
    <div className="divReciept">
      <div className="divUnitWrap">
        <div className="divUnit">
          <h3>Name</h3>
          <p>{name}</p>
        </div>
        <div className="divUnit">
          <h3>QTY</h3>
          <p>{count}</p>
        </div>
        <div className="divUnit">
          <h3>Total</h3>
          <p>${totalPrice}</p>
        </div>
      </div>

      <p className="pDiscount">
        {count >= 5 ? "$" + (price * count).toFixed(2) : ""}
      </p>
      <p className="pSaved">
        {count >= 5 ? "Saved $" + (price * count * 0.2).toFixed(2) : ""}
      </p>
    </div>
  );
}

export default Reciept;
