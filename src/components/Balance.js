import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {

    const balance = useContext(GlobalContext);
    const x = balance.transactions.map( b => b.amount);
    const total = x.reduce((total,amount) => (total+=amount),0).toFixed(2);
    const sign= total<=0 ? 'minus' : 'plus';
   

    return (
       <>
        <h4>Your Balance</h4>
        <h1 className={sign}>
          {total}
           </h1></>
    )
}


