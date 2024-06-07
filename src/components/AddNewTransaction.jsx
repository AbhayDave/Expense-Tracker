import React, { useState } from "react";
import useTracker from "../tracker.context";
import { v4 as uuid } from "uuid";

function AddNewTransaction() {
  const trackerInfo = useTracker();

  const [msg, setMsg] = useState("");
  const [amt, setAmt] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    if (msg === "" || amt === 0) {
      alert("Enter a valid value for msg and amount");
    }
    const newTransaction = {};

    newTransaction.amount = parseInt(amt);
    newTransaction.note = msg;

    trackerInfo.addTransaction(newTransaction);

    setAmt(0);
    setMsg("");
  };

  return (
    <form>
      <h2 className="text-xl text-left pl-5 pt-2">Add New Transaction</h2>
      <div className="flex justify-around items-center">
        <div className="p-5 flex">
          <label htmlFor="note" className="text-xl mr-2">
            Msg:{" "}
          </label>
          <input
            className="outline-red-400 p-2 border border-red-500"
            placeholder="Enter Msg."
            type="text"
            name="note"
            id="note"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            required
          />
        </div>
        <div className="flex justify-center items-start">
          <div className="flex flex-col">
            <label className="text-xl" htmlFor="amt">
              Amount:
            </label>
            <div className="text-sm">(negative = exprense)</div>{" "}
            <div className="text-sm"> (positve = income)</div>
          </div>
          <input
            className="ml-4 outline-red-400 p-2 border border-red-500"
            type="number"
            name="amt"
            id="amt"
            placeholder="Enter the Amount"
            value={amt}
            onChange={(e) => {
              setAmt(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleAdd}
          className="px-3 py-2 hover:scale-105 hover:ring-4 text-lg bg-blue-700 text-white rounded-xl ring-1 ring-blue-500"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default AddNewTransaction;
