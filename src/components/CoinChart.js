import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./UI/Loading";
import { Line } from "react-chartjs-2";

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const CoinChart = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  // eslint-disable-next-line
  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(true);
  const buttonStyling =
    "bg-neutral py-1 px-2 text-baseContent font-semibold hover:bg-primary hover:text-base100";

  const clickHandler = (e) => {
    setDays(e.target.value);
  };

  // Get request triggers on page load
  useEffect(() => {
    const getHistoricalData = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=USD&days=${days}`
      );
      // Stores data in historicalData
      setHistoricalData(data.prices);
      // Sets loading to false
      setLoading(false);
    };
    getHistoricalData();
  }, [days, coin.id]);

  // If loading the Loading component is rendered
  return loading ? (
    <Loading />
  ) : (
    // Chart cointainer
    <div className="w-full lg:w-2/3">
      <div className="flex items-center mb-4">
        <button
          className={`${buttonStyling} rounded-l-md`}
          onClick={clickHandler}
          value={1}
        >
          1D
        </button>
        <button className={`${buttonStyling}`} onClick={clickHandler} value={7}>
          7D
        </button>
        <button
          className={`${buttonStyling}`}
          onClick={clickHandler}
          value={30}
        >
          1M
        </button>
        <button
          className={`${buttonStyling}`}
          onClick={clickHandler}
          value={90}
        >
          3M
        </button>
        <button
          className={`${buttonStyling}`}
          onClick={clickHandler}
          value={180}
        >
          6M
        </button>
        <button
          className={`${buttonStyling} rounded-r-md`}
          onClick={clickHandler}
          value={365}
        >
          1YR
        </button>
      </div>
      {/* Line Chart */}
      <Line
        data={{
          labels: historicalData.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              data: historicalData.map((coin) => coin[1]),
              label: `Price ( Past ${days} Days ) in USD`,
              borderColor: "hsl(198, 93%, 60%)",
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default CoinChart;
