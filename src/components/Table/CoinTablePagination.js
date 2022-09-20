import React from "react";

const CoinTablePagination = ({ onPrev, onNext }) => {
  return (
    // Flex Container
    <div className="flex justify-center text-xs pt-2 pb-4 md:text-sm">
      {/* Button on click goes to previous page of coins */}
      <button
        className="text-baseContent py-1 px-3 bg-neutral rounded-l-md hover:bg-primary hover:text-base100"
        onClick={onPrev}
      >
        Prev
      </button>
      {/* Button on click goes to next page of coins */}
      <button
        className="text-baseContent py-1 px-3 bg-neutral rounded-r-md hover:bg-primary hover:text-base100"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default CoinTablePagination;
