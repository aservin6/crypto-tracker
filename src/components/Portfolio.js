import React, { useEffect, useState } from "react";
import ModalPortal from "./ModalPortal";
import UserCoinsTable from "./UserCoins/UserCoinsTable";
import TransactionTable from "./Transactions/TransactionTable";

const Portfolio = () => {
  // Portfolio states
  const [showModal, setShowModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [userCoins, setUserCoins] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);

  // Grabs userData
  useEffect(() => {
    getUserData();
  }, []);

  // On click shows the Modal component
  const clickHandler = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  const saveUserData = () => {
    localStorage.setItem("userCoins", JSON.stringify(userCoins));
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

  const getUserData = () => {
    if (localStorage.getItem("userCoins") === null) {
      localStorage.setItem("userCoins", JSON.stringify([]));
    } else {
      let userCoinsLocal = JSON.parse(localStorage.getItem("userCoins"));
      setUserCoins(userCoinsLocal);
    }
    if (localStorage.getItem("transactions") === null) {
      localStorage.setItem("transactions", JSON.stringify([]));
    } else {
      let transactionsLocal = JSON.parse(localStorage.getItem("transactions"));
      setTransactions(transactionsLocal);
    }
  };

  useEffect(() => {
    // Reduces transactions array to only the key value pairs needed for the userCoins
    const reducedOnce = transactions.reduce((arr, obj) => {
      return [
        {
          id: obj.id,
          name: obj.coinName,
          symbol: obj.symbol,
          image: obj.image,
          quantity: parseInt(obj.quantity),
          current_price: obj.current_price,
          percent_change_24h: obj.percent_change_24h,
          price_per_coin: obj.price_per_coin,
        },
        ...arr,
      ];
    }, []);

    // Reduces the return value of reducedOnce again to add up the quantities of the objects that share the same id
    const reducedUserCoins = reducedOnce.reduce((acc, cur) => {
      acc[cur.id]
        ? (acc[cur.id].quantity += cur.quantity)
        : (acc[cur.id] = cur);
      return acc;
    }, []);
    const output = Object.values(reducedUserCoins);

    // Reduces transactions to get the users total portfolio value
    const totalPortfolioValue = transactions.reduce((total, obj) => {
      return (total += obj.quantity * obj.current_price);
    }, 0);
    // Sets userCoins to the output variable
    setUserCoins(output);
    localStorage.setItem("transactions", transactions);
    localStorage.setItem("userCoins", userCoins);
    // Sets portfolioValue to totalPortfolioValue that used reducer function
    setPortfolioValue(totalPortfolioValue);
    saveUserData();
    // eslint-disable-next-line
  }, [transactions]);

  return (
    <div className="w-full text-baseContent space-y-10 md:w-2/3 ">
      {/* If showModal is true, the Modal is displayed via portal */}
      {showModal && (
        <ModalPortal
          // Functions and variables are passed through the modal
          onClose={clickHandler}
          showModal={showModal}
          transactions={transactions}
          onAddTransaction={setTransactions}
          userCoins={userCoins}
          setUserCoins={setUserCoins}
        />
      )}
      <div className="space-y-1">
        <h2 className="font-bold text-base md:text-xl">
          Portfolio Value ($USD)
        </h2>
        <div
          // Changes styling if the portfolioValue is less >= 0
          className={`${
            portfolioValue >= 0
              ? `bg-white bg-opacity-5 font-bold text-primary text-xl rounded-md py-2 px-3 w-full md:text-3xl`
              : `bg-white bg-opacity-5 font-bold text-accent text-xl rounded-md py-2 px-3 w-full md:text-3xl`
          }`}
        >
          ${portfolioValue.toLocaleString()}
        </div>
      </div>
      {/* sets showModal to true then displays the modal */}
      <button
        onClick={clickHandler}
        className="w-full bg-neutral py-2 rounded-md text-primary font-semibold"
      >
        Add Transaction <i className="fa-solid fa-circle-plus"></i>
      </button>
      
      {userCoins.length > 0 ? (
        <div className="space-y-1">
          <h2 className="font-bold text-base md:text-xl">Your Coins</h2>
          {/* Renders UserCoins table and passes in the userCoins array or objects */}
          <UserCoinsTable userCoins={userCoins} />
        </div>
      ) : (
        <></>
      )}

      {transactions.length > 0 ? (
        <div className="space-y-1">
          <h2 className="font-bold text-base md:text-xl">Transaction List</h2>
          {/* Renders TransactionTable table and passes in the userCoins array or objects */}
          <TransactionTable
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Portfolio;
