import React, { useState } from "react";

const TransactionModal = (props) => {
  // States
  const [buyOrSell, setBuyOrSell] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [pricePerCoin, setPricePerCoin] = useState(
    props.coin.current_price.toFixed(2)
  );
  const [totalSpent, setTotalSpent] = useState(0);

  // Add transaction button on click
  const clickHandler = () => {
    // Adds object with listed key value pairs
    const transaction = {
      coinName: props.coin.name,
      id: props.coin.id,
      image: props.coin.image,
      symbol: props.coin.symbol,
      current_price: props.coin.current_price,
      percent_change_24h: props.coin.price_change_percentage_24h.toFixed(2),
      quantity: quantity,
      price_per_coin: pricePerCoin,
      total: totalSpent,
      type: buyOrSell,
      key: Math.random() * 1000
    };
    // Stores updated transaction list into newTransactions
    const newTransactions = [transaction, ...props.transactions];
    // Sets transactions state to newTransactions
    props.onAddTransaction(newTransactions);
    // Closes modal via props function
    props.onClose();
  };

  return (
    // Modal container
    <div className="w-screen h-screen flex flex-col justify- space-y-4 fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 md:w-[500px] z-20 overflow-hidden bg-neutral text-baseContent md:h-[550px] py-4 px-6 md:rounded-2xl">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-xl">Add Transaction</span>
        {/* Close modal button */}
        <button
          onClick={props.onClose}
          className="flex items-center justify-center bg-accent aspect-square rounded-full w-8"
        >
          <i className="fa-solid fa-xmark text-base100"></i>
        </button>
      </div>
      
      <div className="flex items-center w-full border-primary border bg-primary rounded-md">
        {/* Set transaction to either Buy or Sell type on click */}
        <button
          onClick={() => {
            setBuyOrSell(true);
          }}
          // Button styling changes on toggle
          className={
            buyOrSell
              ? "bg-primary text-base100 font-semibold w-full rounded-md py-1"
              : "bg-neutral text-baseContent font-semibold w-full rounded-md py-1"
          }
        >
          Buy
        </button>
        {/* Set transaction to either Buy or Sell type on click */}
        <button
          onClick={() => setBuyOrSell(false)}
          // Button styling changes on toggle
          className={
            buyOrSell
              ? "bg-neutral text-baseContent font-semibold w-full rounded-md py-1"
              : "bg-primary text-base100 font-semibold w-full rounded-md py-1"
          }
        >
          Sell
        </button>
      </div>
      <div className="flex items-center space-x-2">
        {/* Selected coin is displayed */}
        <span>
          <img
            className="w-6"
            src={props.coin.image}
            alt={`${props.coin.name} icon`}
          />
        </span>
        <span className="font-semibold">{props.coin.name}</span>
        <span className="text-primary font-semibold">
          {props.coin.symbol.toUpperCase()}
        </span>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex flex-col space-y-1 w-[48%]">
          <label className="font-semibold">Quantity</label>
          {/* Quantity state is updated as input value is changed by user */}
          <input
            onChange={(e) => {
              buyOrSell
                ? setQuantity(e.target.value)
                : setQuantity(-e.target.value);

              setTotalSpent(e.target.value * pricePerCoin);
            }}
            className="text-base100 rounded-md py-1 px-2"
            type="number"
            placeholder="0.00"
          />
        </div>
        <div className="flex flex-col space-y-1 w-[48%]">
          <label className="font-semibold">Price Per Coin</label>
          {/* Price Per Coin state is updated as input value is changed by user */}
          <input
            onChange={(e) => {
              setPricePerCoin(e.target.value);
              setTotalSpent(quantity * e.target.value);
            }}
            className="text-base100 rounded-md py-1 px-2"
            type="number"
            defaultValue={pricePerCoin}
          />
        </div>
      </div>
      <div className="flex flex-col pt-5 space-y-1">
        <span className="font-semibold text-xl">
          Total {buyOrSell ? "Spent" : "Received"}
        </span>
        {/* Displays the total of the transaction */}
        <span className="bg-white bg-opacity-5 font-bold text-primary text-xl rounded-md py-2 px-3 w-full">
          ${totalSpent.toLocaleString()}
        </span>
      </div>
      {/* Adds transaction to transaction list on click */}
      <button
        onClick={clickHandler}
        className="font-semibold py-2 rounded-md w-full bg-primary text-base100"
      >
        Add Transaction
      </button>
    </div>
  );
};

export default TransactionModal;
