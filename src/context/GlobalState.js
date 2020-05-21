import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//initial State
const initialState = {
    transactions:[]
}

// Global context

export const GlobalContext = createContext (initialState);

// Provider Component

export const GlobalProvider = ({ children })=> {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Delete Action
function deleteTransaction ( id ) {
    dispatch ({
            type: 'Delete_Transaction',
            payload: id
             }) }

    // Add Action
function addTransaction ( data ) {
    dispatch ({
            type: 'Add_Transaction',
            payload: data
             }) }         

    return(
        <GlobalContext.Provider value={ {
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )

}