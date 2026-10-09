"use client"

import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation"

function SignUpPage() {
  const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      const user = Object.fromEntries(formData.entries())  as
       {name:string,email: string,image: string,password:string}
      const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/"

    })
      if(data){
       console.log(data)
       redirect("/")
      }
      if (error){
        console.log(error)
      }
      
  }

  return (
      <div  className="flex justify-center">
   <form onSubmit={handleSubmit}>
     <fieldset  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <label className="label">Name</label>
  <input name="name" type="text" className="input" placeholder="Name" />
  <label  className="label">Image</label>
  <input name="image" type="url" className="input" placeholder="ImageUrl" />
  <label className="label">Email</label>
  <input name="email" type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name="password" type="password" className="input" placeholder="Password" />

  <button type="submit" className="btn btn-neutral mt-4">সাইন আপ করুন</button>
</fieldset>
   </form>
    </div>
  )
}

export default  SignUpPage
