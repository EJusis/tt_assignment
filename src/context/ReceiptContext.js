import {createContext, useReducer} from "react";

export const ReceiptContext = createContext()

const initialState = {
    receipts: [],
    totalBill: 0,
}

export const ReceiptReducer = (state, action) => {

    const matchingReceipt = state.receipts.find(receipt => receipt.receiptId === action.payload.id )

    switch (action.type) {
        case 'ADD_RECEIPT':
            return { ...state, receipts: [...state.receipts, action.payload] }
        case 'ADD_CATEGORY':

            // add initial expense row on select change
            if (!matchingReceipt.isInitialized) {
                matchingReceipt.isInitialized = true
                matchingReceipt.category = action.payload.category
                matchingReceipt.expenses.push({
                    note: '',
                    price: 0,
                    expenseId: Math.floor(Math.random() * 100000)
                })
                return { ...state }
            } else {
                matchingReceipt.category = action.payload.category
                return { ...state }
            }
        case 'ADD_EXPENSE':
            matchingReceipt.expenses.push(action.payload.expense)
            return { ...state }
        case 'UPDATE_EXPENSE':
            const matchingExpense = matchingReceipt.expenses.find(expense => expense.expenseId === action.payload.expenseId)

            // updating expense values
            matchingExpense.note = action.payload.expense.note
            matchingExpense.price = action.payload.expense.price

            // getting single receipt total sum
            const priceArray = matchingReceipt.expenses.map(expense => expense.price)
            matchingReceipt.receiptTotal = priceArray.reduce((acc, item) => (acc += item), 0)

            // setting total initial state sum
            const totalArray = state.receipts.map(receipt => receipt.receiptTotal)
            state.totalBill = totalArray.reduce((acc, item) => (acc += item), 0)
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
            totalBill: state.totalBill,
            addReceipt,
            addCategory,
            addExpense,
            updateExpense
        }}>
            {children}
        </ReceiptContext.Provider>
    )
}