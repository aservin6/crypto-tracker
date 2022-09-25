import React from "react";

const UserCoinsTableHead = () => {
  return (
    // Table Head is rendered
    <thead>
      <tr className="bg-neutral border-y border-white border-opacity-[.12] h-10">
        <th className="text-left px-3">Name</th>
        <th className="text-center px-3">Current Price</th>
        <th className="text-center px-3">24h</th>
        <th className="text-center px-3">Holdings</th>
      </tr>
    </thead>
  );
};

export default UserCoinsTableHead;
