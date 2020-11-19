import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransactions = [
    { amount: 600, desc: "Cash" },
    { amount: 90, desc: "Cofee" },
    { amount: -250, desc: "Water" },
    { amount: 20, desc: "Car" }

]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}