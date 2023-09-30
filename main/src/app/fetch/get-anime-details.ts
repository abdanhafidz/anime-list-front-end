import req from "../api-config/requesting"

const getAD = async (id:number,fields:string) =>{
    try{
        const param = "fields"+fields
        const resp = await req(id,param)
        return resp
    }
    catch(err){
        return "error"
    }
}

export default getAD