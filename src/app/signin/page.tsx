"use client"
import { authClient } from "@/lib/auth-client"


function SignInPage() {
   const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())  as
         {name:string,email: string,image: string,password:string}
        const { data, error } = await authClient.signIn.email({
        ...user,
        callbackURL: "/"
  
      })
        if(data){
         console.log(data)
        }
        if (error){
          console.log(error)
        }
        
    }
    
 const handleSignInGoogle = async() => {
  await authClient.signIn.social({
    provider: "google",
  });
    // console.log(data)
 }
 const handleSignInGithub = async () => {
    await authClient.signIn.social({
        provider: "github"
    })
}

  return (
    <div className="">
     <form onSubmit={handleSubmit} action="">

       <div className="flex justify-center">
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  
  <label className="label">Email</label>
  <input name="email" type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name="password" type="password" className="input" placeholder="Password" />

  <button type="submit" className="btn btn-neutral mt-4">সাইন ইন করুন</button>
</fieldset>
    </div>
     </form>
       <div className=" my-5 flex justify-center gap-5">
        <button onClick={handleSignInGoogle} className="btn bg-red-400 text-white"> sign in with google</button>
        <button onClick={handleSignInGithub} className="btn bg-amber-900 text-white" > sign in with Github</button>
     </div>
      </div>
  )
}

export default SignInPage
