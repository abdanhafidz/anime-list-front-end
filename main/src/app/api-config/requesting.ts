import ApiData from "./config";
const req = async (category:any,param:string) => {
    try{
    var resp
    const url = ApiData.url+"/"+category+"?"+param
    const client_ID = ApiData.clientID
    const method = ApiData.method
    const Headers = {
        "Content-Type": "application/json",
        "X-MAL-CLIENT-ID":client_ID,
    }
    await fetch(url, {
        method: method,
        headers: Headers,
        body:""
    })
        .then((response) => response.json())
        .then((data) => resp = JSON.stringify(data) )
        return resp
    } catch(err){
        console.log("error")
        return "There is an error with this request, check the parameter,arugment,methods,etc : "+err
    }

}

export default req