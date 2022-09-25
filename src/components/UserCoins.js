import React from "react";
import UserCoinsTable from "./UserCoinsTable/UserCoinsTable";

const PortfolioUserCoins = ({ userCoins }) => {
  return (
    // User coins is displayed
    <div className="space-y-3">
      <h2 className="font-bold text-base md:text-xl">Your Coins</h2>
      {/* Table component is rendered passing down the userCoins variable */}
      <UserCoinsTable userCoins={userCoins} />
    </div>
  );
};

export default PortfolioUserCoins;
