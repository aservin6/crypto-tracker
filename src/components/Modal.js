import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./UI/Loading";
import TransactionModal from "../components/TransactionModal/TransactionModal";
import TransactionModalListItem from "./TransactionModal/TransactionModalListItem";

const Modal = (props) => {
  // States
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTransactionPage, setShowTransactionPage] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState([]);
  const [search, setSearch] = useState("");

  // Handle search function will filter the coins list based on the users search input
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  useEffect(() => {
    // Get requests is triggered whenever the modal is opened
    const getCoins = async () => {
      if (props.showModal) {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=false`
        );
        // Sets requested data into Coins state
        setCoins(data);
        // Sets loading to false
        setLoading(false);
      }
    };
    getCoins();
  }, [props.showModal]);

  return (
    // Modal container and styling
    <div className="w-screen h-screen flex flex-col justify- space-y-4 fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 md:w-[500px] z-20 overflow-hidden bg-neutral text-baseContent md:h-[550px] py-4 px-6 md:rounded-2xl">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-xl">Select Coin</span>
        {/* Close modal button */}
        <button
          onClick={props.onClose}
          className="flex items-center justify-center bg-accent aspect-square rounded-full w-8"
        >
          <i className="fa-solid fa-xmark text-base100"></i>
        </button>
      </div>
      {/* Sets search state on user input */}
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="w-full rounded-md py-2 px-3 text-base100"
        type="text"
        placeholder="Search"
      />
      
      <div className="modal-list overflow-y-auto h-full">
        {/* If loading, Loading component is displayed */}
        {loading && <Loading />}
        {/* If showTransactionPage is true, displays the transaction page modal */}
        {showTransactionPage && (
          // Functions and variables passed down to TransactionModal
          <TransactionModal
            onClose={props.onClose}
            coin={selectedCoin}
            transactions={props.transactions}
            onAddTransaction={props.onAddTransaction}
            userCoins={props.userCoins}
            setUserCoins={props.setUserCoins}
          />
        )}
        {/* handleSearch returns a filtered coin list which is mapped over and displays a list item */}
        {handleSearch().map((coin) => {
          return (
            // Functions and variables are passed down to TransactionModalListItem
            <TransactionModalListItem
              showTransactionPage={showTransactionPage}
              setShowTransactionPage={setShowTransactionPage}
              coin={coin}
              key={coin.id}
              setSelectedCoin={setSelectedCoin}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
