import req from "../api-config/requesting"

const getAR = async (ranking_type:string,limit:number,offset:number,fields:string) =>{
    try{
        const param = "ranking_type="+ranking_type+"&limit="+limit+"&offset="+offset+"&fields="+fields
        const resp = await req("anime/ranking",param)
        return resp
    }
    catch(err){
        return "error"
    }
}

export default getAR