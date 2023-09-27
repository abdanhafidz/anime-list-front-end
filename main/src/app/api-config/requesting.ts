import ApiData from config


export default function req(category:string,param:string){
    const url = ApiData.url+"/"+category+"/"+param
    const clientID = ApiData.clientID
    const method = ApiData.method
    const data = {
        name: "abdan hafidz",
        bitches: 0,
    };
    const Headers = {
        "Content-Type": "application/json",
        "X-MAL-CLIENT-ID":clientID,
    }
    fetch(url, {
        method: method,
        headers: Headers,
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            return data
        });

}