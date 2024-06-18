
const initialCount:number = 1;
const ReducerCount = (state=initialCount,action:any)=>{
    switch (action.type) {
        case "INCREASE":
            return state+1;
        case "DECREASE":
            return state-1;    
        default:
            return state;
    }
}
export default ReducerCount;