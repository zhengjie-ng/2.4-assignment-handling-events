import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Reciept from "./Reciept";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [prevCount, setPrevCount] = useState([]);
  const [name, setName] = useState("Apple");
  const [price, setPrice] = useState(2);

  const handlePlus = () => {
    const sum = count + 1;
    setCount(sum);
    if (sum >= 5) {
      setDiscount(20);
    }

    setPrevCount([...prevCount, sum]);
  };

  const handleMinus = () => {
    setCount((prevCount) => {
      const sum = prevCount - 1;

      if (sum < 5) {
        setDiscount(0);
      }
      if (sum > 0) {
        return sum;
      } else {
        return 0;
      }
    });
  };

  const reset = () => {
    setCount(0);
    setDiscount(0);
  };

  const handleChange = (value) => {
    setName(value);
  };

  const handleChangePrice = (value) => {
    setPrice(value);
    if (value < 0) {
      alert("Please enter a positive number for the price!");
      setPrice(0);
    }
  };

  return (
    <div className="divWrap">
      <div className="divCounter">
        <Input
          label="Name:"
          value={name}
          onChange={handleChange}
          placeholder="Enter Product Name"
        />
        <Input
          label="Price:"
          value={price}
          onChange={handleChangePrice}
          placeholder="Enter Price"
        />
        <div className="divIncre">
          <Button label="-" onClick={handleMinus} />
          <span>{count}</span>
          <Button label="+" onClick={handlePlus} />

          <Button label="R" onClick={reset} />
        </div>

        <h3>{`Discount: ${discount}%`}</h3>
      </div>
      <Reciept name={name} count={count} price={price} />
    </div>
  );
}

export default Counter;
