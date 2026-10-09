import Image from "next/image"
interface IDetails {
  id: string;
  title: string;
  imageUrl: string;
  text: string;
  tags: string[];
}

async function page({params}:{params:{newsId:string}}) {
    const {newsId} = await params
    const res = await fetch (`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const details: IDetails = data.data
  return (
    <div className="container mx-auto p-3">
         <h3 className="font-semibold text-2xl">{details.title}</h3>
         <Image width={400} height={400} src={details.imageUrl} alt="">
           
         </Image>
         <p>{details.text}</p>
         <div className="flex justify-center items-center gap-3 my-3">
             {
                details.tags.map((tag,id)=> 
                 <div  key={id} className="">
                    <p className="font-semibold">{tag}</p>
                </div>)
             }
         </div>
    </div>
  )
}

export default page
