
import getAL from "../fetch/get-anime-list";

export default async function animeGrid(page:number){
    const res = await getAL("",10,0,"")
            return res
}