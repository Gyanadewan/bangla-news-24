import Image from "next/image"
import Navlinks from "./Navlinks";

function Header() {
 const date = new Date().toLocaleDateString("bn-BD")
 console.log(date);
  return (
   <header className="container mx-auto my-3">
          <div className="flex justify-between ">
        <div className="flex gap-2 ">
         <Image
          width={30}
          height={30}
          src="/logo.webp"
          alt="Logo"
        />
        <div>
          <div>Bangla News 24</div>
         <p>{date}</p>
        </div>
        </div>
       <div className="flex gap-5">
          <button className="btn">Sign In</button>
         <button className="btn bg-red-400 text-white">Sign Up</button>
       </div>
           
    </div>
       <Navlinks></Navlinks>
   </header>
  )
}

export default Header
