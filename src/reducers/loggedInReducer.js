const initialData={
    loggedInData:false
}
const loggedInReducer=(state=initialData,action)=>{
    switch(action.type){
        case "LOGGEDIN_ACTION":
            const {data}=action.payload;
            
            return{
                loggedInData:data
            }
        default: return state;
    }
}

export default loggedInReducer;