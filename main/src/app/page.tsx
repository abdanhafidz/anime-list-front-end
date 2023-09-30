import Image from 'next/image'
import animeGrid from "../app/display/anime-grid"
export default async function Home() {
  const grid = await animeGrid(1)
  return (
    <div className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="p-5">
      <h1 className = {`mb-3 text-5xl font-semibold justify-center`}>🤓 Find your anime</h1>
        <h1 className = {`bold`}>Created with 💀 ! <a href="https://abdanhafidz.com"><b>By <u>Abdan Hafidz</u></b></a></h1>
        <div className="t-24">
        <input type="search" placeholder="Search an Title,Subtitle,..." className="input input-waifu"></input>
        <div className="flex flex-row">
        <div className="basis-1/4"></div>
        <div className="basis-1/4"></div>
        <div className="basis-1/2"></div>
        <p>{grid}</p>
        </div>
        </div>
      </div>
     
    </div>
  )
}
