import React from "react";

const ModalListItem = ({
  coin,
  showTransactionPage,
  setShowTransactionPage,
  setSelectedCoin,
}) => {
  const clickHandler = () => {
    // Updates selected coin state on click
    setSelectedCoin(coin);
    // After a coin is selected sets TransactionPage to true to show the transaction modal
    !showTransactionPage
      ? setShowTransactionPage(true)
      : setShowTransactionPage(false);
  };
  return (
    // Button on click selects the coin
    <button
      onClick={clickHandler}
      className="flex justify-between items-center w-full h-12 bg-neutral rounded-md px-3 hover:cursor-pointer hover:bg-white hover:bg-opacity-5"
    >
      {/* Displays coin Icon, Name and Symbol */}
      <div className="flex items-center gap-3 w-full">
        <span>
          <img className="w-6" src={coin.image} alt="" />
        </span>
        <span className="font-semibold">{coin.name}</span>
        <span className="font-semibold text-primary">
          {coin.symbol.toUpperCase()}
        </span>
      </div>
      <div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </button>
  );
};

export default ModalListItem;
