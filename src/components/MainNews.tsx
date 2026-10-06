import Image from "next/image"



function MainNews({mainNews}) {
   const firstNews = mainNews [0]
  return (
    <div>
     <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
  src={firstNews.imageUrl}
  alt={firstNews.title}
  width={500}
  height={300}
/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstNews.title}</h2>
    <p>{firstNews.description}</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
    </div>
  )
}

export default MainNews
