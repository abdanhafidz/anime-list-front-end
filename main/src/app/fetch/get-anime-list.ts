import req from "../api-config/requesting"

const getAL = async (q:string,limit:number,offset:number,fields:string) =>{
    try{
        const param = "q="+q+"&limit="+limit+"&offset="+offset+"&fields="+fields
        const resp = await req("anime",param)
        return resp
    }
    catch(err){
        return "error"
    }
}

export default getAL