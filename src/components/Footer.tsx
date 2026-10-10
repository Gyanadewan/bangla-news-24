
import Link from "next/link";

const footerLinks = [
  { title: "হোম", href: "/" },
  { title: "জাতীয়", href: "/category/national" },
  { title: "রাজনীতি", href: "/category/politics" },
  { title: "আন্তর্জাতিক", href: "/category/international" },
  { title: "খেলাধুলা", href: "/category/sports" },
  { title: "বিনোদন", href: "/category/entertainment" },
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-red-600">বাংলা</span> নিউজ ২৪
            </Link>

            <p className="text-gray-400 mt-4 text-sm leading-7">
              সত্য ও নিরপেক্ষ সংবাদ জানতে আমাদের সাথেই থাকুন।
              দেশ-বিদেশের সর্বশেষ খবর, রাজনীতি, খেলাধুলা ও
              বিনোদনের আপডেট পেতে চোখ রাখুন বাংলা নিউজ ২৪-এ।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-4">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-l-4 border-red-600 pl-3 mb-4">
              আমাদের সম্পর্কে
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-red-500">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500">
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-red-500">
                  গোপনীয়তা নীতি
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-500">
                  ব্যবহারের শর্তাবলি
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} বাংলা নিউজ ২৪। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;