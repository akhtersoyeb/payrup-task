import { ArrowRightIcon } from "@heroicons/react/24/outline"

const Newsletter = () => {
  return (
    <div className=" bg-blue-200 rounded-md p-3 flex flex-col gap-2">
      <h1 className="text-xl text-slate-800 font-medium capitalize">Never miss a post!</h1>
      <p className="text-sm text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum massa nulla, a iaculis massa fermentum sollicitudin. Nunc porttitor neque.</p>

      <div className="relative">

        <input className="w-full bg-white px-3 py-1.5 rounded-md focus:outline-none text-slate-700" type={'email'} placeholder="Email" />
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">

          <button className="p-1 h-full rounded-tr-md rounded-br-md focus:outline-none focus:shadow-outline hover:bg-slate-200">
            <ArrowRightIcon className="w-12 h-4" />
          </button>
        </span>
      </div>
    </div>
  )
}

export default Newsletter