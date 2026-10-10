import Image from "next/image"
import Navlinks from "./Navlinks";
import UserInfo from "./UserInfo";

function Header() {
 const date = new Date().toLocaleDateString("bn-BD")
 console.log(date);
  return (
   <header className=" my-3">
          <div className="flex justify-between container mx-auto ">
        <div className="flex gap-2 ">
         <Image
          width={40}
          height={20}
          src="/logo.webp"
          alt="Logo"
        />
        <div>
          <div>Bangla News 24</div>
         <p>{date}</p>
        </div>
        </div>  
        <UserInfo></UserInfo>      
    </div>
         <div className="max-w-xl mx-auto">
            <Navlinks></Navlinks> 
         </div>
   </header>
  )
}

export default Header
