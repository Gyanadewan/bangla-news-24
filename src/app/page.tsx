
import MainNews from "@/components/MainNews"
import Marquee from "@/components/Marquee"
import MostRead from "@/components/MostRead"
import NewsCard from "@/components/NewsCard"
interface IotherSection {
   title: string
   curationId: string
  articles: {
  image_url: string
  description: string
  published_at: string
    id: string
  }[]
}
 async function HomePage( ) {
  const res = await fetch ("https://news-api-v2.vercel.app/api/news/sections")
  const data =  await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  const otherSections:IotherSection[] = sections.slice(1)
  console.log(otherSections)
  return ( 
    <div>
       <div className="grid  grid-cols-3 container mx-auto">
           <div className=" col-span-2">
            <MainNews mainNews= {mainNews}></MainNews>
            <div className="">
               {
                otherSections.map(os => <div key={os.curationId} className="">
                   <h2 className="font-bold">{os.title}</h2>
                  <div className="grid grid-cols-3 gap-3 border border-b-2 border-red-600 pb-1">
                      {
                      os.articles.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)

                    }
                  </div>
                </div>)
               }
            </div>
           </div>
           <div className= " grid gap-5 col-span-1 px-5 py-2">
              <MostRead></MostRead>

           </div>
       </div>
    </div>
  )
}

export default HomePage

