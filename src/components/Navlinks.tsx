import Link from "next/link"


 async function Navlinks () {
    const  res = await fetch ("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const navs = data.data
    const filterNavs = navs.filter(n=>n.scrapable)
  return (
    <div className="flex gap-5 justify-center">
        {
            filterNavs.map ((n,i) => <Link key={i} href={n.slug}>{n.title}</Link>)
        }
    </div>
  )
}

export default Navlinks
