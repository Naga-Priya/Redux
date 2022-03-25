const counterState = {
    value: 0
}
const CounterReducer = (counter = counterState, action) => {
    //Reducer has switch to select the action based on type
    console.log("Inside Reducer");
    switch(action.type){
        case 'INCREMENT':
            return counter+1; //reduce to new state
        case 'DECREMENT':
            return counter-1; //reduce to new state
        default:

    }
}
export default CounterReducer;
