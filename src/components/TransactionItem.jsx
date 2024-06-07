import moment from "moment";
import React from "react";
import useTracker from "../tracker.context";

function TransactionItem(props) {
  const trackerInfo = useTracker();

  return (
    <div className="h-20 shadow-lg border-gray-200 border w-[80%] flex flex-col my-2 mx-auto border-r-4 border-r-red-700">
      <div className="flex justify-between py-2 px-3">
        <div className="">{props.msg}</div>
        <div className="">{props.amt}</div>
      </div>
      <div className="text-left px-3">
        {moment(props.time).format("DD/MM/YYYY hh:mm")}
      </div>
      {/* <button onClick={trackerInfo.deleteTransaction()}>X</button> */}
    </div>
  );
}

export default TransactionItem;
