const colorState = {
    color: 'White'
}
 
const ColorReducer = (color = 'White', action) => {
    //Reducer has switch to select the action based on type
    console.log("Inside Color Reducer");
    switch(action.type){
        case 'Red':
            color = 'Red'
            return color; //reduce to new state
        case 'Blue':
            color = 'Blue'
            return color;
        case 'Green':
            color = 'Green'
            return color;
        case 'Yellow':
            color = 'Yellow'
            return color;
        default:

    }
}
export default ColorReducer;
