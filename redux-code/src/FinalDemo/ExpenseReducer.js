const initialState = {
    income:0,
    total:0,
    balance:0,
    items:[]
}

const ExpenseReducer = (state = initialState,action) =>{
    console.log("Reducet called: ",action);
    const newstate = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'ADD_ITEM':
            newstate.items.push(action.payload);
            newstate.total+=action.payload.cost;
            newstate.balance=newstate.income-newstate.total;
            console.log("NewState: ",newstate);
            return newstate;
            case 'DEL_ITEM':
                const newItems = newstate.items.filter(item => item.id!=action.payload);
                console.log("After Delete: ", newstate);
                return {...state,
                        items:newItems};
        default:
            return newstate;
    }
}

export default ExpenseReducer;