const initialState = {
    myColors:[]
}

const MyColorsReducer = (state=initialState,action)=>{
    let newColor = {...state};
    switch(action.type){
        case 'ADD_COLOR':
            newColor.myColors.push(action.payload);
            console.log(newColor);
            break;
        case 'DEL_COLOR':
            
            let idx = newColor.myColors.indexOf(action.payload);
            newColor.myColors.splice(idx,1);
            console.log(newColor);
            break;
        default:
            return newColor;

    }
    return newColor;
}
export default MyColorsReducer;