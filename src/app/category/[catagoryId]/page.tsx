import NewsCard from "@/components/NewsCard";

interface ICategory {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  description: string;
}

async function page({
  params,
}: {
  params: Promise<{ catagoryId: string }>;
}) {
  const { catagoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${catagoryId}`
  );

  const data = await res.json();

  const categoriesNews: ICategory[] = data.data;

  return (
    <div className="container mx-auto">
      <h2 className="border-b-2 border-red-700 font-semibold text-2xl">
        {data.title}
      </h2>

      <div className="grid grid-cols-3 gap-5 mt-4">
        {categoriesNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}

export default page;