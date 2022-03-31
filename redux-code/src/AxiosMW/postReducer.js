const initialState = [];
const postReducer = (state=initialState,action) =>{
    state = action.payload;
    return state;
}
export default postReducer;