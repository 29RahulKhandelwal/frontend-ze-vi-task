const initialData={
    orderData:[]
}
const orderReducer=(state=initialData,action)=>{
    switch(action.type){
        case "ORDER_ACTION":
            const {data}=action.payload;
            
            return{
                orderData:[{
                    data:data
                }]
            }
        default: return state;
    }
}

export default orderReducer;