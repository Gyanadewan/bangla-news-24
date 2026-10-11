"use client"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { useState } from "react"


function page() {
     const { data: session } = authClient.useSession()
      const user = session?.user
       const [show,setShow] = useState(false)
     const handleUpdateProfile = async (e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newUserData = Object.fromEntries(formData.entries())
        
     await authClient.updateUser({
      ...newUserData 
})
     }
     const handelShowForm = () => {
        setShow(!show)
     }
  return (
       <div>
         <div className="max-w-2xl mx-auto px-20 py-10 bg-green-100 border border-fuchsia-500 text-center">
            <Link href={"/profile"}>
             <div className="avatar">
           <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
             <img alt="Tailwind-CSS-Avatar-component" src={user?.image || "/default-avatar.png"} />
           </div>
         </div>
             </Link>
            <h3 className="text-blue-600 my-2 text-xl ">{user?.name}</h3>
            <p className="text-blue-600  text-xl ">{user?.email}</p>
            <button onClick={ handelShowForm} className="btn">Edit profile</button>
        </div>
           {show &&  <form className="flex justify-center" onSubmit={handleUpdateProfile}>
     <fieldset  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <label className="label">Name</label>
  <input name="name" type="text" className="input" placeholder="Name" />
  <label  className="label">Image</label>
  <input name="image" type="url" className="input" placeholder="ImageUrl" />
  <button type="submit" className="btn btn-neutral mt-4">Update Profile</button>
</fieldset>
   </form>}
       </div>

  )
}

export default page
