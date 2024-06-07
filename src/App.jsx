import { useState, useEffect } from "react";
import "./App.css";
import { TrackerProvider } from "./tracker.context.js";
import { v4 as uuidv4 } from "uuid";
import IncomeExpenses from "./components/IncomeExpenses.jsx";
// import TransactionItem from "./components/TransactionItem.jsx";
import TransactionHistory from "./components/TransactionHistory.jsx";
import AddNewTransaction from "./components/AddNewTransaction.jsx";
import Graph from "./components/Graph.jsx";
import moment from "moment";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: "a99b2620-6f9f-4731-b70f-7af1e49365d9",
      amount: -1000,
      note: "Grocery",
      timestamp: "2024-03-26T09:47:49+05:30",
    },
    {
      id: "7f894023-e75a-4461-b852-b80c6d025452",
      amount: -200,
      note: "Dinner",
      timestamp: "2024-03-26T09:47:37+05:30",
    },
    {
      id: "425d7187-de3b-4cf1-bb1e-51eee9363de9",
      amount: 5000,
      note: "Rent 2",
      timestamp: "2024-03-26T09:47:26+05:30",
    },
    {
      id: "ac72fd5f-d5f8-46ca-b8ef-a7d88be43d85",
      amount: 1000,
      note: "rent",
      timestamp: "2024-03-26T09:47:18+05:30",
    },
  ]);
  // const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const balance = income > expenses ? income - expenses : expenses + income;

  // const balance = expenses - income;

  const addTransaction = (transaction) => {
    setTransactions((prev) => [
      { id: uuidv4(), ...transaction, timestamp: moment().format() },
      ...prev,
    ]);

    if (transaction.amount > 0) {
      setIncome((prev) => prev + transaction.amount);
    } else {
      setExpenses((prev) => prev + transaction.amount);
    }
    // setBalance((prev) => prev + transaction.amount);
  };

  const deleteTransaction = (id) => {
    const transactionToBeDeleted = transactions.find(
      (transaction) => transaction.id === id
    );

    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );

    if (transactionToBeDeleted.amount > 0) {
      setIncome((prev) => prev - transactionToBeDeleted.amount);
    } else {
      setExpenses((prev) => prev + transactionToBeDeleted.amount);
    }
    // setBalance((prev) => prev + transactionToBeDeleted.amount);
  };

  useEffect(() => {
    const calculateIncomeAndExpense = (transactions) => {
      const totalIncome = transactions.reduce((acc, transaction) => {
        return acc + (transaction.amount > 0 ? transaction.amount : 0);
      }, 0);

      const totalExpense = transactions.reduce((acc, transaction) => {
        return (
          acc + (transaction.amount < 0 ? Math.abs(+transaction.amount) : 0)
        );
      }, 0);

      return { income: totalIncome, expense: totalExpense };
    };

    const dat = calculateIncomeAndExpense(transactions);

    setIncome(dat.income);
    setExpenses(dat.expense);

    // const transactions = JSON.parse(localStorage.getItem("transactions"));
    // if (transactions && transactions.length > 0) {
    //   setTransactions(transactions);
    // }

    // const income = JSON.parse(localStorage.getItem("income"));
    // if (income) {
    //   setTransactions(income);
    // }

    // const expenses = JSON.parse(localStorage.getItem("expenses"));
    // if (expenses) {
    //   setTransactions(expenses);
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("expenses", JSON.stringify(expenses));
    console.log(transactions);
  }, [transactions]);

  return (
    <>
      <TrackerProvider
        value={{
          transactions,
          income,
          expenses,
          addTransaction,
          deleteTransaction,
        }}
      >
        <div className="h-screen w-screen  flex flex-col">
          <header className="flex min-h-20">
            <div className="w-1/2 text-4xl font-bold underline underline-offset-4 flex items-center justify-center hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Expense Tracker
            </div>

            <div className="w-1/2 text-lg flex items-center justify-center">
              <span className="m-2 text-xl font-bold">YOUR BALANCE:</span>
              <span
                className={
                  balance > 0
                    ? "m-2 text-3xl font-bold text-green-500 hover:scale-125"
                    : "m-2 text-3xl font-bold text-red-500 hover:scale-150"
                }
              >
                {balance}
              </span>
            </div>
          </header>

          <div className="border flex min-h-[70vh] border-blue-500 text-center">
            <div className="w-1/2 border border-blue-500">
              <Graph />
            </div>

            <div className="w-1/2  flex border border-blue-500 ">
              <div className="w-1/2 pb-10 pt-5 overflow-y-hidden">
                <TransactionHistory />
              </div>
              <div className="w-1/2 p-10">
                <IncomeExpenses />
              </div>
            </div>
          </div>
          <div className="w-full h-full text-center">
            <AddNewTransaction />
          </div>
        </div>
      </TrackerProvider>
    </>
  );
}

export default App;
