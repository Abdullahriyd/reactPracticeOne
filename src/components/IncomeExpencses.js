import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpencses = () => {

  const balance = useContext(GlobalContext);

  const income = balance.transactions.map(d => d.amount).filter(d=> d > 0).reduce((a,b) => (a+=b),0).toFixed(2);
  const expanse =Math.abs( balance.transactions.map( d=> d.amount).filter(d => d <0).reduce ((a,b) => (a+=b),0)).toFixed(2);
 
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4> 
          <p  className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expanse}</p>
        </div>
      </div> 
    )
}


