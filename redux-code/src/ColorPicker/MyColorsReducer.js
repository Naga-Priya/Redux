const initialState = {
    myColors:[]
}

// const MyColorsReducer = (state=initialState,action)=>{
//     let newColor = {...state};
//     switch(action.type){
//         case 'ADD_COLOR':
//             //Method 1:
//             //console.log("Before: ",newColor);
//             //newColor.myColors.push(action.payload);
//             //console.log("After: ",newColor);
//             //return newColor;

//             //Method 2:
//             //newColor.myColors.push(action.payload);
//             return{
//                 ...state,
//                 myColors: [...state.myColors,action.payload]
//             }
//             break;
//         case 'DEL_COLOR':
            
//             let idx = newColor.myColors.indexOf(action.payload);
//             newColor.myColors.splice(idx,1);
//             console.log(newColor);
//             return {
//                 ...state,
//                 myColors: [...newColor.myColors]
//             }
//             break;
//         default:
//             return newColor;

//     }
//     //return newColor;
// }

const MyColorsReducer = (state=initialState,action)=>{
    let newColor = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'ADD_COLOR':
            //Method 1:
            //console.log("Before: ",newColor);
            //newColor.myColors.push(action.payload);
            //console.log("After: ",newColor);
            //return newColor;

            //Method 2:
            newColor.myColors.push(action.payload);
            return newColor;
            break;
        case 'DEL_COLOR':
            
            let idx = newColor.myColors.indexOf(action.payload);
            newColor.myColors.splice(idx,1);
            return newColor;
            // return {
            //     ...state,
            //     myColors: [...newColor.myColors]
            // }
            break;
        default:
            return newColor;

    }
    //return newColor;
}

export default MyColorsReducer;