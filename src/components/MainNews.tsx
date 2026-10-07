import Image from "next/image"

interface News {
    id: string
    title:string
    description: string
    category:string
    imageAlt:string
    imageUrl: string
}

function MainNews({mainNews}:{mainNews:News[]}) {
   const [firstNews,...otherNews] = mainNews 
//    const otherNews = mainNews.slice(1)
  return (
    <div className="flex">
     <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
  src={firstNews.imageUrl}
  alt={firstNews.imageAlt}
  width={500}
  height={300}
/>
  </figure>
  <div className="card-body">
    <p className="text-red-600 font-semibold">{firstNews.category}</p>
    <h2 className="card-title">{firstNews.title}</h2>
    <p>{firstNews.description}</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
  <div className="grid gap-2">
     { 
        otherNews.slice(0,4).map(othernew=> <div key={othernew.id} className="border border-gray-300 bg-base-100 py-5 px-5">
            <div className=" ">
                {othernew.title}
            </div>
        </div>)
     }
  </div>
    </div>
  )
}

export default MainNews
