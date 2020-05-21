import React, {useContext} from 'react';
import {Transaction} from './Transaction';
import { GlobalContext } from '../context/GlobalState';


export const TransactionList = () => { 
  
  const apple = useContext(GlobalContext);
  //const {transactions} = useContext(GlobalContext);
  
    return (
        <>  
      <h3>History</h3>
      <ul  className="list">

      {apple.transactions.map( transactionx =>( <Transaction  key={transactionx.id} e={transactionx} />)
        )}
      </ul>
   </>
    )
}
