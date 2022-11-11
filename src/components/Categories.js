import { CreditCardIcon, MagnifyingGlassIcon, PhoneIcon, SwatchIcon, TvIcon, UserIcon, WalletIcon } from "@heroicons/react/24/outline"
const Categories = () => {
  return (
    <div className="bg-indigo-200 py-20 space-y-8">
      <div className='space-y-2 max-w-2xl mx-auto'>
        <h1 className='text-4xl text-blue-600 font-bold text-center'>Our Categories</h1>
        <p className='text-slate-800 text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tristique imperdiet. Proin odio libero, venenatis et leo vitae, venenatis pellentesque urna.</p>
      </div>

      <div className="relative max-w-lg mx-auto">
        <input className="w-full bg-white px-6 py-3 rounded-md focus:outline-none text-slate-700" type={'text'} placeholder="Search your favourite categories" />
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">

          <button className="p-1 h-full rounded-tr-md rounded-br-md focus:outline-none focus:shadow-outline hover:bg-slate-200">
            <MagnifyingGlassIcon className="w-12 h-4" />
          </button>
        </span>
      </div>

      <div className="max-w-2xl mx-auto flex flex-row items-center flex-wrap justify-center gap-4">

        <div className="bg-yellow-400 px-4 py-2 rounded-md w-56 text-white flex items-center justify-between font-semibold">
          <TvIcon className="w-10 h-10 " />
          <span>Cable TV Recharge</span>
        </div>

        <div className="bg-rose-400 px-4 py-2 rounded-md w-56 text-white flex items-center justify-between font-semibold">
          <CreditCardIcon className="w-10 h-10 " />
          <span>Credit Card</span>
        </div>

        <div className="bg-emerald-400 px-4 py-2 rounded-md w-56 text-white flex items-center justify-between font-semibold">
          <PhoneIcon className="w-10 h-10 " />
          <span>Landline Bill</span>
        </div>

        <div className="bg-indigo-400 px-4 py-2 rounded-md w-56 text-white flex items-center justify-between font-semibold">
          <UserIcon className="w-10 h-10 " />
          <span>Society Bill</span>
        </div>

        <div className="bg-sky-400 px-4 py-2 rounded-md w-56 text-white flex items-center justify-between font-semibold">
          <SwatchIcon className="w-10 h-10 " />
          <span>Water Bill</span>
        </div>

      </div>

    </div>
  )
}

export default Categories