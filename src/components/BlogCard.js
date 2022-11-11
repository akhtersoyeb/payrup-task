import { ClockIcon } from '@heroicons/react/24/outline'

export const BlogCardSmall = ({ image, title, date }) => {
  return (
    <div className='max-w-sm grid grid-cols-4 gap-2 items-center'>
      <img
        className="h-20 w-full object-cover rounded-xl"
        src={image}
        alt="Unable to load"
      />
      <div className='col-span-3 flex flex-col gap-1'>
        <h1 className='text-md leading-tight font-medium text-slate-800'>{title}</h1>
        <div className='flex items-center text-sm gap-1 text-gray-400'>
          <ClockIcon className='w-4 h-4 ' />
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

const BlogCard = ({ image, tags, title, text, date }) => {
  return (
    <div className=" gap-x-5 p-3 shadow-lg rounded-xl grid grid-cols-1 gap-3 sm:grid-cols-2 items-center">

      <div className="shrink-0">
        <img
          className=" w-full object-cover rounded-xl"
          src={image}
          alt="Unable to load"
        />
      </div>

      <div>
        <div className='space-y-2'>
          <p className="flex gap-3 divide-x divide-orange-400">
            {tags.map((tag, index) => (
              <span key={index} className={(index !== 0 ? 'pl-2 ' : '') + "text-indigo-600 font-medium text"}>{tag}</span>
            ))}
          </p>
          <h1 className="text-2xl text-slate-800 font-bold ">{title}</h1>
          <p className="text-sm text-gray-600">{text}</p>
          <div className='flex items-center text-sm gap-1 text-gray-400'>
            <ClockIcon className='w-4 h-4 ' />
            <p>{date}</p>
          </div>
          <button className='bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700'>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default BlogCard