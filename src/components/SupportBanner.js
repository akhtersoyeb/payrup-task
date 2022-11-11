
const SupportBanner = () => {
  return (
    <div className="rounded-xl bg-blue-600 text-white flex flex-col-reverse gap-y-4 items-center justify-between px-20 py-5 sm:flex-row">
      <div className="flex flex-col items-center gap-y-3 sm:items-start">
        <h2 className="text-lg font-medium text-center">We're here to help you</h2>
        <h1 className="text-2xl font-bold text-center">24/7 Customer Support</h1>
        <button className="bg-white rounded-lg px-6 py-2 text-blue-600">Contact Us</button>
      </div>
      <div>
        <img
          src="/images/support.svg"
          className="h-32 sm:h-56"
          alt="Unable to load"
        />
      </div>
    </div>
  )
}

export default SupportBanner