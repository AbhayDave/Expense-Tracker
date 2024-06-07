import { createContext, useContext } from "react";

const initialState = {
  transactions: [
  ],
  income: 0,
  expenses: 0,
  addTransaction: (transaction) => {},
  deleteTransaction: (id) => {},
};

export const trackerContext = createContext(initialState);

export const TrackerProvider = trackerContext.Provider;

export default function useTracker() {
  return useContext(trackerContext);
}

