import React from "react";
import useTracker from "../tracker.context";
import {
  ComposedChart,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AreaChart, Area } from "recharts";

import moment from "moment";

function Graph() {
  const trackerInfo = useTracker();
  const transactions = trackerInfo.transactions;

  const incomeTransaction = transactions.filter((t) => t.amount > 0);
  const expenseTransaction = transactions.filter((t) => t.amount < 0);

  // console.log(incomeTransaction);

  const data = transactions.map((t) => {
    // let t2 = moment(t.timestamp).format("hh:mm");
    return { ...t, timestamp: moment(t.timestamp).format("hh:mm") };
  });

  data.reverse();

  const data1 = incomeTransaction.map((t) => {
    // let t2 = moment(t.timestamp).format("hh:mm");
    return { ...t, timestamp: moment(t.timestamp).format("hh:mm") };
  });

  data1.reverse();

  const data2 = expenseTransaction.map((t) => {
    // let t2 = moment(t.timestamp).format("hh:mm");
    return {
      ...t,
      timestamp: moment(t.timestamp).format("hh:mm"),
      amount: t.amount * -1,
    };
  });

  data2.reverse();

  // incomeTransaction.forEach((t) =>
  //   console.log(moment(t.timestamp).format("hh:mm"))
  // );

  // console.log(data2);

  // const data = [
  //   { amount: 100, timestamp: moment("2024-03-26T09:30:00").format() },
  //   { amount: 150, timestamp: moment("2024-03-26T10:00:00").format() },
  //   { amount: 200, timestamp: moment("2024-03-26T10:30:00").format() },
  //   // Add more data points as needed
  // ];

  return (
    <ResponsiveContainer className="mt-16 px-5" width="100%" height={400}>
      <ComposedChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="timestamp" type="category" />
        <YAxis dataKey="amount" />
        <Tooltip />
        <Area data={data2} dataKey="amount" fill="red" />
        <Scatter data={data1} dataKey="amount" fill="blue" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default Graph;

// <div className="p-10 w-full h-full">
// </div>
// <ResponsiveContainer width="100%" className="mt-16" height={400}>
//   <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
    // <CartesianGrid />
//     <XAxis dataKey="timestamp" type="category" />
//     <YAxis dataKey="amount" />
//     <Tooltip />
//     <Scatter data={data} fill="#8884d8" />
//   </ScatterChart>
// </ResponsiveContainer>

// <ResponsiveContainer width="100%" height={400}>
//   <AreaChart data={data2}>
//     <CartesianGrid />
//     <XAxis dataKey="timestamp" type="category" />
//     <YAxis dataKey="amount" />
//     <Tooltip />
//     <Area type="monotone" dataKey="amount" fill="#8884d8" />
//   </AreaChart>
// </ResponsiveContainer>
