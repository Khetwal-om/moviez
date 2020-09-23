export default  (initialState=[],action)=>{
    if(action.type==='FETCH_TOPRATED'){
        return action.payload
    }
    return initialState
}
