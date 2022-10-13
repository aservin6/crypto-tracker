import React from "react";
import UserCoinsTableHead from "./UserCoinsTableHead";
import UserCoinItem from "./UserCoinItem";

const UserCoinsTable = ({ userCoins, userCoinsData }) => {
  return (
    // Makes the table scrollable when there is overflow
    <div className="overflow-auto md:overflow-visible">
      <table className="w-full text-xs md:text-sm">
        {/* Renders the Table Head in its own component */}
        <UserCoinsTableHead />
        <tbody>
          {/* Maps over the users coins and renders a UserCoinItem for each object */}
          {userCoins.map((coin) => {
            // Passes the coin object along with a key
            return <UserCoinItem coin={coin} key={coin.id} userCoinsData={userCoinsData} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserCoinsTable;
