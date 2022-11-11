import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { ClockIcon } from '@heroicons/react/24/outline'
import popularBlogs from '../fakedata/popularblogs';

function Hero() {


  return (
    <Carousel
      interval={2000}
      animation="slide"
    >
      {
        popularBlogs.map(blog => (
          <Item
            key={blog.id}
            image={blog.image}
            tags={blog.tags}
            title={blog.title}
            text={blog.text}
            date={blog.date}
          />
        ))
      }
    </Carousel>
  )
}

function Item({ image, tags, title, text, date }) {
  return (
    <div className="gap-x-5 p-3  grid grid-cols-1 gap-3 sm:grid-cols-2 items-center">

      <div className='order-2 sm:order-1'>
        <div className='space-y-2'>
          <h1 className="text-2xl text-slate-800 font-bold ">{title}</h1>
          <div className='flex gap-3 divide-x divide-orange-400'>
            <div className='flex items-center text-sm gap-1 sm:gap-3 text-gray-400'>
              <ClockIcon className='w-4 h-4 ' />
              <p>{date}</p>
            </div>
            <p className="pl-2 flex  gap-1 sm:gap-3 divide-x divide-orange-400">
              {tags.map((tag, index) => (
                <span key={index} className={(index !== 0 ? 'pl-2 ' : '') + "text-indigo-600 font-medium text"}>{tag}</span>
              ))}
            </p>
          </div>
          <p className="text-sm text-gray-600">{text}</p>
          <button className='bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700'>Read More</button>
        </div>
      </div>


      <div className="shrink-0 order-1 sm:order-2">
        <img
          className=" w-full object-cover rounded-xl"
          src={image}
          alt="Unable to load"
        />
      </div>

    </div>
  )
}

export default Hero