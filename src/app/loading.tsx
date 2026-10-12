

function LoadingPage() {
  return (
   <div className="flex min-h-screen flex-col items-center justify-center gap-4">
<div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

  <h2 className="text-xl font-semibold">
    লোড হচ্ছে.....
  </h2>

  <p className="text-sm text-gray-500">
    অনুগ্রহ করে অপেক্ষা করুন
  </p>
</div>
  )
}

export default LoadingPage
