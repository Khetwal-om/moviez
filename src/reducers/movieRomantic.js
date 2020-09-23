export default (initialState=[],action)=>{
    if(action.type==='FETCH_ROMANCE'){
        return action.payload
    }
    return initialState
}
