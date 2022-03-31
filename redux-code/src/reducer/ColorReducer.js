const initialState = {
    color: 'White'
}
 
const ColorReducer = (state = initialState, action) => {
    const newState = {...state};
    //Reducer has switch to select the action based on type
    console.log("Inside Color Reducer");
    switch(action.type){
        // case 'Red':
        //     color = 'Red'
        //     return color; //reduce to new state
        // case 'Blue':
        //     color = 'Blue'
        //     return color;
        // case 'Green':
        //     color = 'Green'
        //     return color;
        // case 'Yellow':
        //     color = 'Yellow'
        //     return color;
        case 'CHANGE_COLOR':
            newState.color = action.payload;
            break;
        default:
            return newState;

    }
    console.log(newState);
    return newState;
}
export default ColorReducer;
