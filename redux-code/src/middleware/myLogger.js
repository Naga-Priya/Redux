export const myLogger = state => {
    return next => {
        return action => {
            console.log('Middleware Ran..');
            return next(action);
        }
    }
}
