
import MainNews from "@/components/MainNews"
import Marquee from "@/components/Marquee"
 async function HomePage() {
  const res = await fetch ("https://news-api-v2.vercel.app/api/news/sections")
  const data =  await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  return ( 
    <div>
      <Marquee></Marquee>
       <div className="grid  grid-cols-3 container mx-auto">
           <div className=" col-span-2">
            <MainNews mainNews= {mainNews}></MainNews>
           </div>
           <div className="bg-green-400 col-span-1 p-10">
             dhdh

           </div>
       </div>
    </div>
  )
}

export default HomePage

