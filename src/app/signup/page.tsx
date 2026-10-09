

function SignUpPage() {
  return (
           <div className="flex justify-center">
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

  <label className="label">Name</label>
  <input name="name" type="text" className="input" placeholder="Name" />
  <label  className="label">Image</label>
  <input name="image" type="url" className="input" placeholder="ImageUrl" />
  <label className="label">Email</label>
  <input name="email" type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name="password" type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">সাইন আপ করুন</button>
</fieldset>
    </div>
  )
}

export default  SignUpPage
