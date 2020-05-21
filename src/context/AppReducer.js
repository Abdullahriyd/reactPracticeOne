export default ( state , action) =>{
   switch(action.type) {
       case 'Delete_Transaction' :
           return{
               ...state,
               transactions:state.transactions.filter( transaction => transaction.id !== action.payload  )
           }
        case 'Add_Transaction' :
            return {
                ...state,
                transactions: [action.payload,  ...state.transactions]
                // action.payload = AddTransaction.js s newTransaction object.
            }
           
       default: console.log([...state.transactions])
    return state ;
   }
  }