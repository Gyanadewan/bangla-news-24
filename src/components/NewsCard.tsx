import Image from "next/image"
import Link from "next/link"
interface INews {
  id: string
  imageUrl: string
  imageAlt: string
  category: string
  description: string
}
function NewsCard({news}:{news:INews}) {

  return (
    <div>
       <Link href={`/news/${news.id}`}>
           <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image
        src={news.imageUrl}
        alt={news.imageAlt}
        width={600}
        height={600}
      />
        </figure>
        <div className="card-body">
          <p className="text-red-600 font-semibold">{news.category}</p>
          <p>{news.description}</p>
        </div>
      </div>
       </Link>
    </div>
  )
}

export default NewsCard
