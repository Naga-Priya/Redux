const initialState = {
    income:0,
    total:0,
    balance:0,
    items:[]
}

const ExpenseReducer = (state = initialState,action) =>{
    const newstate = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'ADD_ITEM':
            newstate.items.push(action.payload);
            newstate.total+=action.payload.value;
            newstate.balance=newstate.income-newstate.total;
            console.log("NewState: ",newstate);
            return newstate;
        default:
            return newstate;
    }
}

export default ExpenseReducer;