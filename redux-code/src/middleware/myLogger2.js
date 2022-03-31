export const myLogger2 = store => next => action => {
    console.log("Middle log 2");
    next(action)
}