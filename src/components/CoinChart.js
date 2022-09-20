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
    // eslint-disable-next-line
  }, [days]);

  // If loading the Loading component is rendered
  return loading ? (
    <Loading />
  ) : (
    // Chart cointainer
    <div className="w-full lg:w-2/3">
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
