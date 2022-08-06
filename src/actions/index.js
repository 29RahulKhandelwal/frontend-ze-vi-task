export const LoggedInAction=(data)=>{
    return{
        type:"LOGGEDIN_ACTION",
        payload:{
            data:data
        }
    }
}
export const CrossAction=(data)=>{
    return{
        type:"CROSS_ACTION",
        payload:{
            data:data
        }
    }
}
export const OrderAction=(data)=>{
    return{
        type:"ORDER_ACTION",
        payload:{
            data:data
        }
    }
}