import React from "react";
import TransactionItem from "./TransactionItem";
import useTracker from "../tracker.context";

function TransactionHistory() {
  const trackerInfo = useTracker();

  const transactions = trackerInfo.transactions || [];

  return (
    <>
      <div className="mb-5 font-semibold text-xl ">Transaction History</div>
      <div className="h-full  overflow-scroll overflow-x-hidden">
        {transactions.map((transaction) => {
          return (
            <TransactionItem
              key={transaction.id}
              msg={transaction.note}
              amt={transaction.amount}
              time={transaction.timestamp}
            />
          );
        })}
      </div>
    </>
  );
}

export default TransactionHistory;
