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