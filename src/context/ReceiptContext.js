import {createContext, useReducer} from "react";

export const ReceiptContext = createContext()

const initialState = {
    receipts: [],
    totalBill: 0,
}

export const ReceiptReducer = (state, action) => {

    const matchingReceipts = state.receipts.find(receipt => receipt.receiptId === action.payload.id )

    switch (action.type) {
        case 'ADD_RECEIPT':
            return { ...state, receipts: [...state.receipts, action.payload] }
        case 'ADD_CATEGORY':
            matchingReceipts.category = action.payload.category
            return { ...state }
        case 'ADD_EXPENSE':
            matchingReceipts.expenses.push(action.payload.expense)
            return { ...state }
        case 'UPDATE_EXPENSE':
           // UPDATING LOGIC
            return { ...state }
        default:
            return state

    }
}

export const ReceiptContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReceiptReducer, initialState)

    function addReceipt(newReceipt) {
        dispatch({
            type: 'ADD_RECEIPT',
            payload: newReceipt
        });
    }

    function addCategory(category) {
        dispatch({
            type: 'ADD_CATEGORY',
            payload: category
        })
    }

    function addExpense(newExpense) {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: newExpense
        })
    }

    function updateExpense(updatedExpense) {
        dispatch({
            type: 'UPDATE_EXPENSE',
            payload: updatedExpense
        })
    }

    return (
        <ReceiptContext.Provider value={{
            receipts: state.receipts,
            addReceipt,
            addCategory,
            addExpense,
            updateExpense
        }}>
            {children}
        </ReceiptContext.Provider>
    )
}