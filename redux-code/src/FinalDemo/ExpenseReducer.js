const initialState = {
    income:0,
    total:0,
    balance:0,
    items:[],
    filterTxt:''
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
            const newItems = newstate.items.filter(item => item.id!==action.payload.id);
            console.log("After Delete: ", newItems);
            newstate.total-=action.payload.cost;
            newstate.balance=newstate.income-newstate.total;;
            return {...newstate,
                    items:newItems};
        case 'ADD_FILTER':
            return {...state,
            filterTxt:action.payload}
        case 'CNG_INCOME':
            const tmp = {...state};
            const tmp1 = {...state,
                income:action.payload,
                total:tmp.total,
                balance:action.payload-tmp.total};
                console.log("After New Income: ",tmp1)
            return {...state,
                income:action.payload,
                total:tmp.total,
                balance:action.payload-tmp.total}
        default:
            return newstate;
    }
}

export default ExpenseReducer;