const initialData={
    crossData:false
}
const crossReducer=(state=initialData,action)=>{
    switch(action.type){
        case "CROSS_ACTION":
            const {data}=action.payload;
            
            return{
                crossData:data
            }
        default: return state;
    }
}

export default crossReducer;