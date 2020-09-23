export default (initialState=[],action)=>{
    if(action.type==='FETCH_TRENDING'){
        return action.payload
    }
    return initialState
}
