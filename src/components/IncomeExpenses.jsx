import React from "react";
import useTracker from "../tracker.context";

function IncomeExpenses() {
  const trackerInfo = useTracker();

  return (
    <div className="flex h-full  shadow-2xl flex-col justify-evenly items-center ">
      <div className="h-1/2 hover:scale-125  w-full flex flex-col items-center justify-center">
        <div className="text-lg font-semibold">INCOME</div>
        <div className="text-2xl hover:scale-125 text-green-500">
          +₹{trackerInfo.income}
        </div>
      </div>
      <hr />
      <div className="h-1/2 w-full flex-col hover:scale-125 flex items-center justify-center">
        <div className="text-lg font-semibold">EXPENSES</div>
        <div className="text-2xl hover:scale-125 text-red-500">
          -₹{Math.abs(trackerInfo.expenses)}
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenses;
