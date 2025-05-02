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
  const [price, setPrice] = useState("2");

  //   const name = "Banana";
  // const price = 2.99;

  const handlePlus = () => {
    const sum = count + 1;
    setCount(sum);
    if (sum >= 5) {
      setDiscount(20);
    }

    setPrevCount([...prevCount, sum]);
  };

  const handleMinus = () => {
    // First Solution
    // const sum = count - 1;
    // setCount(sum);
    // if (sum < 5) {
    //   setDiscount(0);
    // }

    // Second solution
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
          {/* <h2>{name}</h2> */}
          <Button label="-" onClick={handleMinus} />
          {/* <button onClick={handleMinus}>-</button> */}
          <span>{count}</span>
          <Button label="+" onClick={handlePlus} />
          {/* <button onClick={handlePlus}>+</button> */}
          {/* <h2>{`$ ${price}`} each</h2> */}

          <Button label="R" onClick={reset} />
        </div>

        <h3>{`Discount: ${discount}%`}</h3>
      </div>
      <Reciept name={name} count={count} price={price} />
    </div>
  );
}

export default Counter;
