import { useEffect, useState } from "react";
import axios from "axios";
import CoinTableRow from "./CoinTableRow";
import CoinTableHead from "./CoinTableHead";
import Loading from "../UI/Loading";
import CoinTablePagination from "./CoinTablePagination";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  // Handle search function will filter the coins list based on the users search input
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  // Prev Button handler
  const clickPrevHandler = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  // Next button handler
  const clickNextHandler = () => {
    setPage(page + 1);
  };

  // Get request triggers on page load
  useEffect(() => {
    setError(null);
    const getCoins = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
        );
        // Request data is stored in coins
        setCoins(response.data);
      } catch (error) {
        setError(error.message);
      }
      // Set loading to false
      setLoading(false);
    };
    getCoins();
    // Get request triggers again when page is changed
  }, [page]);

  // If loading render Loading component
  return loading ? (
    <Loading />
  ) : (
    // Container
    <div className="w-full lg:w-2/3">
      {/* Heading */}
      <div className="flex justify-between items-center">
        <h2 className="text-baseContent text-base font-semibold mb-1 md:text-xl">
          Cryptocurrency Prices by Market Cap{" "}
        </h2>
        <div className="flex items-center bg-neutral rounded-md pl-2">
          <i className="fa-solid fa-magnifying-glass text-baseContent"></i>
          <input
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            type="text"
            className="rounded-md py-0.5 px-2 text-white bg-neutral focus:outline-none w-full"
            placeholder="Search"
          />
        </div>
      </div>
      {/* Table Container */}
      {error ? (
        <p className="mt-20 text-accent font-bold text-2xl text-center">{error}</p>
      ) : (
        <>
          <div className="overflow-auto md:overflow-visible">
            <table className="relative mx-auto container text-xs text-baseContent w-full bg-base100 md:text-sm">
              {/* Table Head */}
              <CoinTableHead />
              <tbody>
                {/* Renders a CoinTableRow component for each coin */}
                {handleSearch().map((coin) => {
                  return <CoinTableRow coin={coin} key={coin.id} />;
                })}
              </tbody>
            </table>
          </div>
          {/* Table Pagination component */}
          <CoinTablePagination
            onPrev={clickPrevHandler}
            onNext={clickNextHandler}
          />
        </>
      )}
    </div>
  );
};

export default CoinTable;
