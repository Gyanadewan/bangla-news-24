
"use client"

import Link from "next/link"
import { authClient } from "@/lib/auth-client"

function UserInfo() {
  const { data: session } = authClient.useSession()
  const user = session?.user

  const handleSignOut = async () => {
    await authClient.signOut()
  }

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-5">
          <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
    <img alt="Tailwind-CSS-Avatar-component" src={user.image || "/default-avatar.png"} />
  </div>
</div>
          <span className="text-blue-600">{user.name}</span>

          <button
            onClick={handleSignOut}
            className="btn bg-red-400 text-white"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="flex gap-5">
          <Link href="/signin" className="btn">
            সাইন ইন
          </Link>

          <Link href="/signup" className="btn bg-red-400 text-white">
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  )
}

export default UserInfo
