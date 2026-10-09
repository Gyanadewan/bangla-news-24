

function SignInPage() {
  return (
              <div className="flex justify-center">
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  
  <label className="label">Email</label>
  <input name="email" type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name="password" type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">সাইন ইন করুন</button>
</fieldset>
    </div>
  )
}

export default SignInPage
