
interface ImostreadNews {
  id: string
  title: string
}
 async function MostRead() {
    const res = await fetch ("https://news-api-v2.vercel.app/api/news/most-read")
    const data = await res.json()
    const news:ImostreadNews[] = data.data
  return (
        <div className="bg-base-200 shawdow-md p-2">
             <h1 className="font-semibold text-red-600">সর্বাধিক</h1>
             <div className="">
                {
                    news.map((n,i )=> <div key={n.id} className="flex gap-3 py-3">
                       <p className="text-xl text-red-400 font-semibold">{i+1}</p>  <h2>{n.title}</h2>
                    </div>)
                }
             </div>
    </div>
  )
}

export default MostRead
