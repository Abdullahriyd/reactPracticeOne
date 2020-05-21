import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

// for this in arrow function define props name with value ex: e={transactionx}

export const Transaction = ( {e} ) => {

    const sign = e.amount < 0 ? '-' : '';
    const {deleteTransaction} = useContext(GlobalContext);

    return (
        
            <li className={e.amount<0 ? 'minus' : 'plus'}>
          {e.text} <span> {sign}{Math.abs(e.amount)} </span><button onClick={ () => deleteTransaction(e.id)} className="delete-btn">x</button>
        </li> 
        
    )
}


//when i use props no need create e={transactionx}
/*export const Transaction = ( props ) => {
    return (
        
            <li className="minus">
          {props.transactionx.text} <span>{props.transactionx.amount}</span><button className="delete-btn">x</button>
        </li> 
        
    )
}*/




