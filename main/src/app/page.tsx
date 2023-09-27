import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="p-5">
      <h1 className = {`mb-3 text-5xl font-semibold justify-center`}>💀 Kill Gojo Satoru</h1>
        <h1 className = {`bold`}>Find Your Waifu ! <a href="https://abdanhafidz.com"><b>By <u>Abdan Hafidz</u></b></a></h1>
        <div className="t-24">
        <input type="text" placeholder="Search your Waifu" className="input input-waifu"></input>
        <div className="flex flex-row">
        <div className="basis-1/4"></div>
        <div className="basis-1/4"></div>
        <div className="basis-1/2"></div>
        </div>
        </div>
      </div>
      <div className="option-panel">
        <h1 className = {`mb-3 text-3xl font-semibold center`} align="center">Choose How's your character killed</h1>
        <button className={`rounded-full bg-sky`}>Save Changes</button>
      </div>
    </div>
  )
}
